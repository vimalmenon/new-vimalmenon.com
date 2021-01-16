import React from "react";


import {
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import { useSelector } from "react-redux";

import SpeedDial from "@material-ui/lab/SpeedDial";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction/SpeedDialAction";

import {icon} from "model";


const useStyles = makeStyles(() => {
	return createStyles({
		speedDial: {
			display: "flex",
			"& >div" : {
				position:"absolute",
				zIndex:50
			}
		},
	});
});

const SocialMediaMobile:React.FC = () => {
	const classes = useStyles();
	const socialMedias = useSelector<IState, ISocialMedia[]>((state) => state.misc.socialMedias);
	const [open, setOpen] =React.useState<boolean>(false);
	return (
		<SpeedDial
			ariaLabel="mobile navigation"
			className={classes.speedDial}
			hidden={true}
			icon={<ContactSupportIcon />}
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			direction={"down"}>
			{socialMedias.map(({id, name}) => {
				const Icon = icon[name];
				return (
					<SpeedDialAction
						key={id}
						icon={<Icon />}
						tooltipTitle={name}/>);
			})}
		</SpeedDial>
	);
};

export default SocialMediaMobile;