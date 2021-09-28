---
layout: article.njk
tags: ["article", "tech"]
title: Parallel loading in React
date: 2021-04-17
imageUrl: parallel-loading-react.jpg
blurb: How to run multiple requests in parallel and combine the results.
---

Recently I wanted to build a React component that would merge the results of several independent requests into one set of data and render it as a single list.

The requests would look like this:

- GET to load initial list of items
- GET to load item 1 details
- GET to load item 2 details
- ... etc for each item in the list

I wanted the list to ultimately render like this:

- Item 1 + details
- Item 2 + details
- ... etc for each item in the list

The problem was: how to load a list of items, then load details of each item, making a separate request per item, then combine all of this information and render it to the user.

The simplest way would be to simply await all the requests and then render everything together at once.

[![alt text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vfxqexp62yw29w5co3bf.png)](https://mermaid.live/edit#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW1N0YXJ0XVxuICAgICAgICBBIC0tPiBCKEZldGNoIGl0ZW1zIGxpc3QpXG4gICAgICAgIEIgLS0-IEMoRmV0Y2ggaXRlbSBuIGRldGFpbHMpXG4gICAgQyAtLT4gRHtOZXh0IGl0ZW0_fVxuICAgIEQgLS0-fFllc3wgQ1xuICAgIEQgLS0-fE5vfCBFKENvbWJpbmUgaXRlbXMgbGlzdCB3aXRoIGRldGFpbHMpXG4gICAgICAgIEUgLS0-IEYoUmVuZGVyIGl0ZW1zIGxpc3Qgd2l0aCBkZXRhaWxzKVxuICAgICAgICBGIC0tPiBHW0RvbmVdXG4gICIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkZWZhdWx0XCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

Here is an implementation which uses `Promise.all`.

[Codepen Link](https://codepen.io/jonathanconway/pen/dyRQGam)

```jsx
function UsersAndStatuses(props) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(async () => {
    const users = await mockUsers();
    const userIds = users.map((user) => user.id);

    // Promise.all technique
    const userStatuses = await Promise.all(userIds.map(mockUserStatus));

    const usersWithStatus = users.map((user, index) => ({
      ...user,
      ...userStatuses[index],
    }));

    setUsers(usersWithStatus);
  }, []);

  return (
    <ul>
      {!users.length && "Loading..."}
      {users.map((user) => (
        <li>
          {user.name} {user.status}
        </li>
      ))}
    </ul>
  );
}
```

The problem with this solution is: it could take a considerable amount of time for all of these additional requests to render and we don't want to have to keep the user waiting for the whole list to load before they can see anything.

A far better solution would be to first load and render the list of items without the details, then render each detail for each item as it is loaded.

[![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ohogu4cawjiyhhd7hu4i.png)](https://mermaid.live/edit/#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW1N0YXJ0XVxuICAgICAgICBBIC0tPiBCKEZldGNoIGl0ZW1zIGxpc3QpXG4gICAgICAgIEIgLS0-IEMoUmVuZGVyIGl0ZW1zIGxpc3QpXG4gICAgICAgIEMgLS0-IEQoRmV0Y2ggaXRlbSBuIGRldGFpbHMpXG4gICAgICAgIEQgLS0-IEUoUmVuZGVyIGl0ZW0gbiBkZXRhaWxzKVxuICAgIEUgLS0-IEZ7TmV4dCBpdGVtP31cbiAgICBGIC0tPnxZZXN8IERcbiAgICBGIC0tPnxOb3wgR1tGaW5pc2hdXG4gICIsIm1lcm1haWQiOiJ7XG4gIFwidGhlbWVcIjogXCJkYXJrXCJcbn0iLCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6dHJ1ZX0)

Implementing this improved solution raised a challenge:

**How to merge the details from all the requests together into one state variable without triggering a React refresh cycle?**

If the React refresh cycle triggered, it would have caused the state variable to contain incomplete data, as one partial value would override another.

It turns out the solution is rather simple - we just have to re-use the latest copy of our state variable each time we set it.

So instead of the typical `setState` call:

```js
setUsers({
  ...users,
  [updatedUserId]: updatedUser,
});
```

We [pass a state setter](https://twitter.com/dan_abramov/status/816394376817635329):

```js
setUsers((currentUsers) => ({
  ...currentUsers,
  [updatedUserId]: updatedUser,
}));
```

So... here's the parallel loading solution.

[Codepen Link](https://codepen.io/jonathanconway/pen/dyRQMQL)

```jsx
function UsersAndStatuses(props) {
  const [usersById, setUsersById] = React.useState({});
  const users = React.useMemo(() => Object.values(usersById), [usersById]);

  React.useEffect(async () => {
    const usersList = await mockUsers();

    setUsersById(
      usersList.reduce(
        (acc, user) => ({
          ...acc,
          [user.id]: user,
        }),
        {}
      )
    );

    const userIds = usersList.map((user) => user.id);

    userIds.forEach(async (userId) => {
      const userStatus = await mockUserStatus(userId);

      // Async state setter technique
      setUsersById((currentUsersById) => ({
        ...currentUsersById,
        [userId]: {
          ...currentUsersById[userId],
          ...userStatus,
        },
      }));
    });
  }, []);

  return (
    <ul>
      {!users.length && "Loading..."}
      {users.map((user) => (
        <li>
          {user.name} {user.status}
        </li>
      ))}
    </ul>
  );
}
```

Now go forth and parallelize all your async multiple requests!

Good luck!
