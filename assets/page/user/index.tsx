import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { withRouter , RouteComponentProps} from "react-router-dom";

import {navigation} from "service";
import {MetaData} from "component";

import Header from "./header";
import HeaderScrollable from "./header/scrollable";
import Body from "./body";
import Footer from "./footer";
import EarlyRelease from "./early-release";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary
		},
	});
});

const User:React.FC<RouteComponentProps> = ({history, location}) => {
	React.useEffect(() => {
		navigation.init(location);
		const unSubscribe = history.listen(navigation.init);
		return unSubscribe;
	}, []);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<EarlyRelease />
			<MetaData />
			<Header />
			<HeaderScrollable />
			<Body />
			<Footer />
		</div>
	);
};


export default withRouter(User);