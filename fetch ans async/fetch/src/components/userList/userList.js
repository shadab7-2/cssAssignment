import React, { useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    setUsers(data.data);
  }

  const UserCard = ({ user }) => (
    <div className='UserCard'>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.email}</p>
    </div>
  );

  return (
    <div className='user'>
      <button onClick={getUsers}>Get Users</button>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

