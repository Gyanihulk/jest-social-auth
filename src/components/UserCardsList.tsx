import React from "react";

import { UserCardsListProps } from "../types/components";
import Card from "./Cards";

const UserCardsList: React.FC<UserCardsListProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
      {users.map((user) => (
        <Card
          key={user.id}
          title={user.first_name + user.last_name}
          desc={user.email}
          img={user.avatar}
        />
      ))}
    </div>
  );
};

export default UserCardsList;
