import "./css/main.css";
import "./css/styles.scss";
import React from "react";
import ReactDOM, { render } from "react-dom";
import { refs } from "./components/refs/refs";

import { App, AppArr } from "./components/social-profile/App";
import { AppFriendList } from "./components/friend-list/AppFriendsList";
import { StatisticList } from "./components/statistic/Statistic";
import { TransactionHistory } from "./components/transactions/TransactionHistory";

// ReactDOM.render(<AppArr/>, refs.root )
// ReactDOM.render(<App />, refs.root);
// ReactDOM.render(<AppFriendList/>, refs.root)
// ReactDOM.render(<StatisticList title={"Upload stats"}/>, refs.root)
// ReactDOM.render(<TransactionHistory/>, refs.root)

ReactDOM.render(<App />, refs.root);
ReactDOM.render(<AppFriendList/>, document.getElementById('root1') )
ReactDOM.render(<StatisticList title={"Upload stats"}/>, document.getElementById('root2'))
ReactDOM.render(<TransactionHistory/>, document.getElementById('root3'))

