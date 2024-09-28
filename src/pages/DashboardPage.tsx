import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/http';

const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      setUsers(response.data.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
