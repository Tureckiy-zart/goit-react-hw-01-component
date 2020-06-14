import React from "react";
import user from "../../data/user.json";
import users from "../../data/users.json";
import { Profile } from "./Profile";

export const AppArr = () => (
  <>
    {users.map((user) => (
      <Profile key={Date.now} {...user} />
    ))}
  </>
);

export const App = () => <Profile {...user} />;



