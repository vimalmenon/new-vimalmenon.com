import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flexDirection:"column",
			flex:"1 1 50%",
			margin:theme.spacing(2),
		},
		field:{
			display:"flex",
			margin:theme.spacing(2,0)
		},
		arrowIcon: {
			fontSize:"1rem",
		}
	});
});

const Form:React.FC = ()=> {
	const [form, setForm] = React.useState({
		name:"",
		email:"",
		subject:"",
		message:""
	});
	const [disabled]= React.useState<boolean>(true);
	const onUpdate = (e) => setForm({...form, [e.target.name]:e.target.value});
	const classes = useStyles();
	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div className={classes.field}>
				<TextField
					label="Your Name"
					color="secondary"
					required={true}
					fullWidth={true}
					name="name"
					value={form.name}
					onChange={onUpdate}
					inputProps={{"aria-label": "Email"}}/>
			</div>
			<div className={classes.field}>
				<TextField
					label="Your Email"
					color="secondary"
					fullWidth={true}
					name="email"
					value={form.email}
					onChange={onUpdate}
					inputProps={{"aria-label": "Your Name"}}/>
			</div>
			<div className={classes.field}>
				<TextField
					label="Subject"
					color="secondary"
					required={true}
					fullWidth={true}
					name="subject"
					value={form.subject}
					onChange={onUpdate}
					inputProps={{"aria-label": "Subject"}}/>
			</div>
			<div className={classes.field}>
				<TextField 
					fullWidth={true}
					label="Message" 
					required={true}
					color="secondary" 
					multiline 
					rows={10}
					name="message"
					value={form.message}
					onChange={onUpdate}
					inputProps={{"aria-label": "Message"}}/>
			</div>
			<div className={classes.field}>
				<Button 
					variant="contained" 
					color="secondary" 
					disabled={disabled}>
					Send Message
					<ArrowForwardIcon className={classes.arrowIcon}/>					
				</Button>
			</div>
		</form>
	);
};

export default Form;