import React from "react";

import {Editor} from "component_admin";

import {IContentDataProps} from "../index.d";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		},
		editor: {
			display:"flex",
			flex:"1 1 100%"
		}
	});
});
const ContentData:React.FC<IContentDataProps> = ({data, parentKey, onValueUpdate, isJson}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{data.map((value, key) => {
				return (
					<div key={key}>
						<div>
							<Select
								native
								label="Type"
								value={value.type}
								onChange={(e) => onValueUpdate(e, parentKey, key)}
								inputProps={{
									name: "type"
								}}
								fullWidth>
								<option value={"full"}>full</option>
								<option value={"short"}>short</option>
							</Select>
						</div>
						<Editor
							value={value.data}
							className={classes.editor}
							language={isJson?"javascript":"markdown"}
							onChange={(value) => onValueUpdate({
								target:{
									name:"data",
									value
								}
							}, parentKey, key)} />
					</div>
				);
			})}
		</div>
	);
};

export default ContentData;