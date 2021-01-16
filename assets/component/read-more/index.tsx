import React from "react";

import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import {icon} from "model";


const {View} = icon;

const useStyles = makeStyles(() => {
	return createStyles({
		footerText : {
			cursor:"pointer",
			"& svg":{
				marginBottom:"-4px",
				fontSize:"20px"
			},
			"& span": {
				padding:"7px"
			},
		},
	});
});
const ReadMore:React.FC<IReadMore> = ({text, onReadMore}) => {
	const classes = useStyles();
	return (
		<span className={classes.footerText} onClick={onReadMore}>
			<View />
			<span>
				{text}
			</span>
		</span>
	);
};

export default ReadMore;