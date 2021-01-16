import React from "react";

import {Element} from "react-scroll";
import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import { Container, PageTitle } from "component";




const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display: "flex",
		},
	});
});

const Latest:React.FC<IPagesProps> = ({dark}) => {
	const classes = useStyles();
	return(
		<Element name="latest" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="Latest" />
				</div>
			</Container>
		</Element>
	);
};

export default Latest;