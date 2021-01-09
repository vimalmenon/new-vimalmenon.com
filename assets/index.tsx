import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "store";

import Page from "./page";
import "./index.scss";

import {SnackBar} from "component";

import "./manifest.webmanifest";
import "./image/192x192.png";
import "./image/favicon.ico";

import {Workbox} from "workbox-window";

if ("serviceWorker" in navigator) {
	const wb = new Workbox("/sw.js");
	wb.register();
}

ReactDOM.render(
	<Provider store={store}>
		<SnackBar />
		<Page />
	</Provider>,
	document.getElementById("main"),
);