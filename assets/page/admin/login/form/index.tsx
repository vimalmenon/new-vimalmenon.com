import React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";


import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

import { IconButton } from "@material-ui/core";
import { VisibilityOff } from "@material-ui/icons";
import Visibility from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button/Button";

import {ICredentials} from "./index.d";
import {onFormSave} from "./index.service";

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			display: "flex",
			width:"800px",
			flexDirection:"column",
			fontSize:"1.2em"
		},
		inputFieldContainer:{
			display:"flex",
			margin:theme.spacing(2,0)
		}
	});
});

const Form:React.FC = () => {
	const classes = useStyles();
	const [hide, setHide] = React.useState<boolean>(false);
	const [credential, setCredential] = React.useState<ICredentials>({username:"", password:""});
	const setFormValue = (e) => {
		const {name, value} = e.target;
		setCredential({
			...credential,
			[name]:value
		});
	};
	return (
		<section className={classes.root}>
			<div className={classes.inputFieldContainer}>
				<TextField
					fullWidth
					color="secondary"
					required 
					id="username" 
					label="Username"
					name="username"
					value={credential.username}
					onChange={setFormValue}
					placeholder="Username"/>
			</div>
			<div className={classes.inputFieldContainer}>
				<FormControl fullWidth>
					<InputLabel 
						required
						color="secondary"
						htmlFor="standard-adornment-password">Password</InputLabel>
					<Input
						color="secondary"
						id="standard-adornment-password"
						value={credential.password}
						name="password"
						onChange={setFormValue}
						type={hide?"text":"password"}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={() => setHide(!hide)}
									aria-label="toggle password visibility">
									{hide?<Visibility />:<VisibilityOff />}
								</IconButton>
							</InputAdornment>
						} />
				</FormControl>
			</div>
			<div className={classes.inputFieldContainer}>
				<Button 
					type="submit"
					variant="contained" 
					color="secondary"
					onClick={onFormSave.bind(this,credential)}>
					Login
				</Button>
			</div>
		</section>
	);
};

export default Form;