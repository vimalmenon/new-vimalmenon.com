import React from "react";


import {useInitData} from "./index.service";
import TextField from "@material-ui/core/TextField";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";

import ContentData from "./content-data";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		},
		accordionDetails : {
			display:"flex",
			flexDirection:"column"
		},
		row: {
			margin:theme.spacing(2,0)
		},
		footer : {
			justifyContent:"flex-end"
		}
	});
});

const Content:React.FC = () => {
	const {data, onValueUpdate, onSave} = useInitData();
	const [expanded, setExpanded] = React.useState<number|null>(null);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{data?.map((value, key) => {
				return (
					<Accordion expanded={expanded===key} key={key} onChange={() => setExpanded(expanded===key?null:key)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}>
							<Typography>{value.title}</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetails}>
							<div className={classes.row}>
								<TextField
									name="title"
									label="Title"
									color="secondary" 
									value={value.title}
									onChange={(e) => onValueUpdate(e, key)}
									fullWidth/>
							</div>
							<div className={classes.row}>
								<TextField
									name="name"
									label="Name"
									color="secondary" 
									value={value.name} 
									onChange={(e) => onValueUpdate(e, key)}
									fullWidth/>
							</div>
							<div className={classes.row}>
								<Checkbox 
									checked={value.isJson}
									value={value.isJson}
									name="isJson"
									onChange={(e) => onValueUpdate(e, key)} />
							</div>
							<div className={classes.row}>
								<ContentData 
									data={value.contentData}
									parentKey={key}
									onValueUpdate={onValueUpdate}
									isJson={value.isJson}/>
							</div>
						</AccordionDetails>
					</Accordion>
				);
			})}
			<div className={classes.footer}>
				<Button variant="contained" color="secondary" onClick={onSave}>Save</Button>
			</div>
		</div>
	);
};


export default Content;