import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./store";
import Page from "./page";

import "./index.scss";

ReactDOM.render(
	<Provider store={store}>
		<Page />
	</Provider>,
	document.getElementById("main"),
);