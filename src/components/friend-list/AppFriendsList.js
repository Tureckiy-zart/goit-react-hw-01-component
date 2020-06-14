import React from "react";
import friends from "../../data/friends.json";
import { FriendListItem } from "./List";
import styles from "./friendList.module.css";

const { friendList } = styles;

export const AppFriendList = () => (
  <>
    <ul className={friendList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  </>
);
