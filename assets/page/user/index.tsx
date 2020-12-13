import React from "react";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

import {MetaData} from "component";

const User:React.FC = () => {
	const theme = createMuiTheme({
	});
	return (
		<ThemeProvider theme={theme}>
			<MetaData />
			<div>
				This is Vimal Menon
			</div>
		</ThemeProvider>
	);
};


export default User;