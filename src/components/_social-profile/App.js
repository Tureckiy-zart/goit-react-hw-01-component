import React from "react";
import user from "../../data/user.json";
import users from "../../data/users.json";
import { Profile } from "./Profile";
import { AppFriendList } from "../friend-list/AppFriendsList";
import { StatisticList } from "../statistic/Statistic";
import { TransactionHistory } from "../transactions/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <AppFriendList />
      <StatisticList />
      <TransactionHistory />
    </>
  );
};

// export const AppArr = () => (
//   <>
//     {users.map((user) => (
//       <Profile key={Date.now} {...user} />
//     ))}
//   </>
// );
