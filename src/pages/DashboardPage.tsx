import React, { useEffect, useState } from "react";
import { getUsers } from "../services/http";
import UserCardsList from "../components/UserCardsList";

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
      <h1 className="text-center">Secure Dashboard</h1>
      <h4 className="text-center">User Cards</h4>
      <UserCardsList users={users} />
    </div>
  );
};

export default DashboardPage;
