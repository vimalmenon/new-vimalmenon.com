import React from "react";

import {Element} from "react-scroll";
import {
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core/styles";


import { Container, PageTitle, ReadMore } from "component";


import {page} from "model";
import { useHistory } from "react-router-dom";

const {short} = page.announcements;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display: "flex",
		},
		content : {
			display:"flex",
			flexWrap:"wrap",
			[theme.breakpoints.down("sm")]: {
				flexDirection:"column",
			},
		},
		latestItem:{
			display:"flex",
			flexDirection:"column",
			flex:"0 0 50%",
			padding:theme.spacing(2)
		},
		latestTitle:{
			fontSize:"2em",
			justifyContent:"space-between",
			display:"flex"
		},
		latestDate:{
			fontSize:"0.5em"
		},
		latestContent:{
			fontSize:"1.2em"
		},
		footer : {
			display:"flex",
			justifyContent:"flex-end"
		}
	});
});

const Latest:React.FC<IPagesProps> = ({dark}) => {
	const classes = useStyles();
	const {push} = useHistory();
	const onReadMore = () => push("/announcements");
	return(
		<Element name="latest" className={classes.element}>
			<Container dark={dark}>
				<div className={classes.title}>
					<PageTitle title="Latest" />
				</div>
				<div className={classes.content}>
					{short.map((data, key) => {
						return (
							<div key={key} className={classes.latestItem}>
								<div className={classes.latestTitle}>
									{data.title}
									<span className={classes.latestDate}>
										{data.date}
									</span>
								</div>
								<div className={classes.latestContent}>
									{data.description}
								</div>
							</div>
						);
					})}
				</div>
				<div className={classes.footer}>
					<ReadMore text="Read More" onReadMore={onReadMore} />
				</div>
			</Container>
		</Element>
	);
};

export default Latest;