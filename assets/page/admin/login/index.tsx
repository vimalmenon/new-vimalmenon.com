import React from "react";

import Header from "../../user/header";
import Footer from "../../user/footer";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container } from "component";

import Form from "./form";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			backgroundColor: theme.palette.background.paper,
			color: theme.palette.text.primary,
			flex:"1 1 100%",
			minHeight:"100vh"
		},
		container: {
			display: "flex",
			flex:"1 1 100%",
		},
		formContainer:{
			display: "flex",
			flex:"1 1 100%",
			justifyContent:"center",
			alignItems:"center"
		}
	});
});
const Login:React.FC = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			<CssBaseline />
			<Header />			
			<Container className={classes.container}>
				<div className={classes.formContainer}>
					<Form />
				</div>
			</Container>
			<Footer />
		</section>
	);
};

export default Login;