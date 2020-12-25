import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import {notification} from "utility";

const SnackBar:React.FC = () => {
	const {notifications} = notification.useInit();	
	return (
		<Snackbar	
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
			open={notifications?true:false}
			autoHideDuration={6000}
			onClose={notification.removeMessage}
			message={notifications}
			action={
				<IconButton size="small" aria-label="close" color="inherit" onClick={notification.removeMessage}>
					<CloseIcon fontSize="small" />
				</IconButton>
			} />
	);
};

export default SnackBar;