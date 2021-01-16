import React from "react";

import {Element} from "react-scroll";
import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import { Container, PageTitle, ReadMore } from "component";


import {page} from "model";
import { useHistory } from "react-router-dom";

const {short} = page.announcements;

const useStyles = makeStyles(() => {
	return createStyles({
		element: {
			display: "flex",
			flexDirection:"column",
		},
		title : {
			display: "flex",
		},
		content : {
			display: "flex",
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
							<div key={key}>
								<div>
									{data.title}
								</div>
								<div>
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