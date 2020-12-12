import React from "react";

import {
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";

const User:React.FC = () => {
	const theme = createMuiTheme({
	});
	return (
		<ThemeProvider theme={theme}>
			<div>
				This is Vimal Menon
			</div>
		</ThemeProvider>
	);
};


export default User;