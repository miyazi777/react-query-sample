import { useQuery } from 'react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function User() {

  const { data, isLoading, isError, error, status } = useQuery('users', fetchUsers, { retry: 5, cacheTime: 1000*60 });
  console.log(status)

  if (isLoading) return (<div>Loading...</div>);

  if (isError) return (<span>Error: {error.message}</span>)

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <div>
        {data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </div>
  );
}

export default User;