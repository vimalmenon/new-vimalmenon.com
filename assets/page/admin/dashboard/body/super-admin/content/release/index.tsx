import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {icon} from "model";
import {useInitData} from "./index.service";


import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";


const {Delete, Add} = icon;
const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		},
		versionItems : {
			display:"flex",
			borderBottom:"1px solid red",
			flexDirection:"column",
			padding:theme.spacing(2)
		},
		featureItem :{
			display:"flex",
			padding:theme.spacing(2)
		},
		footer:{
			display:"flex",
			margin:theme.spacing(2),
			justifyContent:"flex-end"
		}
	});
});


const Release:React.FC = () => {
	const {releases, onReleaseUpdate, onDetailAdd, onDetailDelete, onSave} = useInitData();
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{releases.map((data, key) => {
				return (
					<Accordion key={key}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}>
							<Typography>{data.versionNo}</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.versionItems}>
							<div>
								<TextField 
									label="Version No" 
									name="versionNo" 
									color="secondary" 
									value={data.versionNo}
									fullWidth={true}
									onChange={(e) => onReleaseUpdate(e, key)} />
								<div>
									Features <Add onClick={() => onDetailAdd(key)} />
								</div>
							</div>
							{data.details.map((detail, innerkey) => {
								return (
									<div key={innerkey} className={classes.featureItem}>
										<TextField 
											color="secondary"
											name={`${innerkey}`}
											value={detail} 
											fullWidth={true}
											onChange={(e) => onReleaseUpdate(e, key, innerkey)}/>
										<Delete onClick={() => onDetailDelete(key, innerkey)} />
									</div>
								);
							})}
						</AccordionDetails>
					</Accordion>
				);
			})}
			<div className={classes.footer}>
				<Button variant="contained" color="secondary" onClick={onSave}>
					Save
				</Button>
			</div>
		</div>
	);
};

export default Release;