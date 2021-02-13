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
const ContentData:React.FC<IContentDataProps> = ({data}) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{data.map((value, key) => {
				console.log(value);
				return (
					<div key={key}>
						<div>
							<Select
								native
								value={value.type}
								inputProps={{
									name: 'age',
									id: 'age-native-simple',
								}}>
								<option aria-label="None" value="" />
								<option value={"full"}>full</option>
								<option value={"short"}>short</option>
							</Select>
						</div>
						<Editor
							value={value.data}
							className={classes.editor} />
					</div>
				);
			})}
		</div>
	);
};

export default ContentData;