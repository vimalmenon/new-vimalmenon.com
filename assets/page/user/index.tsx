import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { withRouter , RouteComponentProps, Link} from "react-router-dom";

import {navigation} from "service";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
		},
	});
});

import {MetaData} from "component";

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
			<MetaData />
			<Link to="/user/test">tesst</Link> 
			<Link to="/admin">admin</Link> 
			Website comming soon...
		</div>
	);
};


export default withRouter(User);