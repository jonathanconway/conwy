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
  const [users, setUsers] = React.useState([]);

  React.useEffect(async () => {
    const users = await mockUsers();
    const userIds = users.map(user => user.id);
    const userStatuses = await Promise.all(
      userIds.map(mockUserStatus)
    );
    const usersWithStatus = users.map((user, index) => ({
      ...user,
      ...userStatuses[index]
    }));
    setUsers(usersWithStatus);
  }, []);

  return (
    <ul>
      {!users.length && 'Loading...'}
      {users.map(user => (
        <li>{user.name} {user.status}</li>
      ))}
    </ul>
  );
}

const element = <UsersAndStatuses />;
ReactDOM.render(element, document.getElementById('root'));
