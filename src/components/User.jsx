import { useState } from 'react';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function User() {
  const [users, setUser] = useState([]);

  fetchUsers().then((data) => {
    setUser(data);
  })

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;