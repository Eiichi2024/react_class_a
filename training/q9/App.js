import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { data, loading } = useFetch('<https://jsonplaceholder.typicode.com/users>');

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;