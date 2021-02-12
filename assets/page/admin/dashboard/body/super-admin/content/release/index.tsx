import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import {icon} from "model";
import {onSave, onInit, onDeleteDetail, onVersionNoUpdate, onVersionDetailUpdate, onDetailAdd} from "./index.service";


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
	const [releases, setReleases] = React.useState<IReleaseResponse[]>([]);
	const classes = useStyles();
	React.useEffect(() => {
		onInit(setReleases);
	},[]);

	return (
		<div className={classes.root}>
			{releases.map((data, key) => {
				return (
					<div key={key} className={classes.versionItems}>
						<div>
							<TextField 
								label="Version No" 
								name="versionNo" 
								color="secondary" 
								value={data.versionNo}
								fullWidth={true}
								onChange={(e) => setReleases(onVersionNoUpdate(releases, e, key))} />
							<div>
								Features <Add onClick={() => setReleases(onDetailAdd(releases, key))} />
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
										onChange={(e) => setReleases(onVersionDetailUpdate(releases, e, key))}/>
									<Delete onClick={() => setReleases(onDeleteDetail(releases, key, innerkey))} />
								</div>
							);
						})}
					</div>
				);
			})}
			<div className={classes.footer}>
				<Button variant="contained" color="secondary" onClick={() => onSave(releases)}>
					Save
				</Button>
			</div>
		</div>
	);
};

export default Release;