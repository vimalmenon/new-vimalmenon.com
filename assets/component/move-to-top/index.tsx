import React from "react";


import {
	makeStyles,
	createStyles,
} from "@material-ui/core/styles";

import {animateScroll} from "react-scroll";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

//import {scrollSpy} from "react-scroll";

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
			color:"white"
		}
	});
});

const MoveToTop:React.FC = () => {
	/*
	const [pos, setPos] = React.useState<number>(0);
	React.useEffect(() => {
		scrollSpy.addSpyHandler((x, y) => {
			setPos(y);
		}, document);
	},[]);
	*/
	const classes = useStyles();
	return (
		<Tooltip title="Top">
			<button 
				className={classes.root} 
				onClick={() => animateScroll.scrollToTop()}>
				<ExpandLessIcon className={classes.icon}/>
			</button>
		</Tooltip>
		
	);
};

export default MoveToTop;