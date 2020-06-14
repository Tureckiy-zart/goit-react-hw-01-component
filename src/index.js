import "./css/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { App, AppArr } from "./components/social-profile/App";
import { AppFriendList } from "./components/friend-list/AppFriendsList";

const root = document.getElementById("root");
// ReactDOM.render(<AppArr/>, root )
// ReactDOM.render(<App />, document.getElementById("root"));


ReactDOM.render(<AppFriendList/>, root)