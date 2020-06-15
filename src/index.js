import React from "react";
import ReactDOM, { render } from "react-dom";

import "./css/main.css";
import "./css/styles.scss";

import { refs } from "./components/refs/refs";
import { App } from "./components/_social-profile/App";

ReactDOM.render(<App />, refs.root);
