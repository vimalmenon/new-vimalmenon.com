import React from "react";


import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {animateScroll} from "react-scroll";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display:"flex",
			height:"50px",
			width:"50px",
			position:"fixed",
			right:"20px",
			bottom:"50px",
			justifyContent:"center",
			alignItems:"center",
			borderRadius:"50px",
			backgroundColor:"#FA2B54"
		},
		icon : {
			fontSize:"3em",
		}
	});
});

const MoveToTop:React.FC = () => {
	const classes = useStyles();
	return (
		<Tooltip title="Move to top">
			<div className={classes.root} onClick={() => animateScroll.scrollToTop()}>
				<ExpandLessIcon className={classes.icon}/>
			</div>
		</Tooltip>
		
	);
};

export default MoveToTop;