function mockUsers() {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        { id: 0, name: 'Jon' },
        { id: 1, name: 'Jill' },
        { id: 2, name: 'Ashwini' },
        { id: 3, name: 'Ankur' }
      ]);
    }, 1000)
  });
}

function mockUserStatus(id) {
    return new Promise((res) => {
    setTimeout(() => {
      res({ status: id < 2 ? 'on' : 'off' });
    }, 1000 * id)
  });
}

function UsersAndStatuses(props) {
  const [usersById, setUsersById] = React.useState({});
  const users = React.useMemo(() => Object.values(usersById), [usersById]);

  React.useEffect(async () => {
    const usersList = await mockUsers();

    setUsersById(usersList.reduce((acc, user) => ({ ...acc, [user.id]: user }), {}));

    const userIds = usersList.map(user => user.id);

    userIds.forEach(async (userId) => {
      const userStatus = await mockUserStatus(userId);
      console.log(userStatus);
      setUsersById((currentUsersById => ({
        ...currentUsersById,
        [userId]: {
          ...currentUsersById[userId],
          ...userStatus
        }
      })));
    });
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li>{user.name} {user.status}</li>
      ))}
    </ul>
  );
}

const element = <UsersAndStatuses />;
ReactDOM.render(element, document.getElementById('root'));
