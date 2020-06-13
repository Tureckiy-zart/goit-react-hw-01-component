import React from "react";
import { Profile } from "./Examples";
import user from "../data/user.json";

export const App = () => (
  <>
    {user.map((user) => {
      return <Profile key={Date.now} {...user} />;
    })}
  </>
);
