import React from "react";

import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { useSelector } from "react-redux";

import {theme} from "utility";

const ToggleTheme:React.FC = () => {
	const themeType = useSelector<IState, ThemeType>((state)=> state.config.themeType);
	let titleLabel="Dark mode";
	let Icon = BrightnessLowIcon;
	if (themeType ==="dark") {
		Icon = BrightnessHighIcon;
		titleLabel="Light mode";
	}
	return (
		<Tooltip title={titleLabel} aria-label={titleLabel} onClick={theme.toggleTheme}>
			<IconButton color="inherit">
				<Icon/> 
			</IconButton>
		</Tooltip>
	);
};

export default ToggleTheme;