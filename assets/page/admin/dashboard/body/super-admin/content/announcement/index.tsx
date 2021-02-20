import React from "react";

import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";


const Announcement:React.FC = () => {
	return (
		<div>
			<div>
				<TextField
					fullWidth={true}
					label="Title"
					color="secondary" />
				<TextField
					fullWidth={true}
					label="Description"
					color="secondary" />
				<TextField
					fullWidth={true}
					label="Published Date"
					color="secondary" />
				<TextField
					fullWidth={true}
					label="Links"
					color="secondary" />
			</div>
			<div>
				<Button 
					variant="contained" 
					color="secondary">
					Save
				</Button>
			</div>
		</div>
	);
};

export default Announcement;