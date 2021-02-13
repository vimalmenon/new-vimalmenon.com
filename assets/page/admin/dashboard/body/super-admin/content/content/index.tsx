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
		}
	});
});

const Content:React.FC = () => {
	const {data} = useInitData();
	const [expanded, setExpanded] = React.useState<number>(0);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{data?.map((value, key) => {
				return (
					<Accordion expanded={expanded===key} key={key} onChange={() => setExpanded(key)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}>
							<Typography>{value.title}</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.accordionDetails}>
							<div>
								<TextField color="secondary" value={value.title} fullWidth/>
							</div>
							<div>
								<TextField color="secondary" value={value.name} fullWidth/>
							</div>
							<div>
								<Checkbox 
									checked={value.isJson} />
							</div>
							<ContentData data={value.contentData}/>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};


export default Content;