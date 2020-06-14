import React from "react";
import styles from "./friendList.module.css";

const { item, green, red } = styles;

export const FriendListItem = ({ avatar, isOnline, name }) => (
  <>
    <li className={item}>
      {isOnline ? <span className={green}></span> : <span className={red}></span>}
      {/* <span className={isOnline ? { green } : { red }}></span> */}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  </>
);
