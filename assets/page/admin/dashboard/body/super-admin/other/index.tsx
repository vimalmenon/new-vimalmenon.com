import React from "react";

import {api} from "model_admin";
import {ApiCaller} from "utility";
import {Table} from "component_admin";


const {GetSuperAdminLinks} = api;

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		},
		table : {
			display:"flex",
			flex: "1 1 100%"
		}
	});
});


const columns = [
	{ title: "Id", field: "id" },
	{ title: "Name", field: "name" },
	{ title: "Title", field: "title"},
	{ title: "URL", field: "url"}
];
const Other:React.FC = () => {
	const [links, setLinks] = React.useState<ILinkReponse[]>([]);
	const classes = useStyles();
	React.useEffect(() => {
		new ApiCaller<ILinkReponse[]>(new GetSuperAdminLinks())
			.getPromise()
			.then(setLinks);
	},[]);
	return (
		<section className={classes.root}>
			<Table
				data={links} 
				columns={columns}
				title={"URL"}/>
		</section>
	);
};

export default Other;