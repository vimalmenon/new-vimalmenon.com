import React from "react";

import {Container, PageTitle} from "component";
import {Element} from "react-scroll";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
	});
});
const Tutorials:React.FC<{dark:boolean}> = ({dark}) => {
	const classes = useStyles();
	return (
		<Element name="tutorials" className={classes.element}>
			<Container dark={dark}>
				<PageTitle title="Tutorials" />
				<section>
					this is tutorials
				</section>
			</Container>
		</Element>
	);
};

export default Tutorials;