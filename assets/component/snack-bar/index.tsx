import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import {notification} from "utility";

const SnackBar:React.FC = () => {
	const {notificatons} = notification.useInit();	
	return (
		<Snackbar	
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			open={notificatons?true:false}
			autoHideDuration={2000}
			onClose={notification.removeMessage}
			message={notificatons}
			action={
				<IconButton size="small" aria-label="close" color="inherit" onClick={notification.removeMessage}>
					<CloseIcon fontSize="small" />
				</IconButton>
			} />
	);
};

export default SnackBar;