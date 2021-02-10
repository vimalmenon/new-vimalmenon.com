import React from "react";

import {api} from "model_admin";
import {ApiCaller} from "utility";
import {Table} from "component_admin";


const {GetSuperAdminLinks} = api;


const columns = [
	{ title: "Id", field: "id" },
	{ title: "Name", field: "name" },
	{ title: "Title", field: "title"},
	{ title: "URL", field: "url"}
];
const Other:React.FC = () => {
	const [links, setLinks] = React.useState<ILinkReponse[]>([]);
	React.useEffect(() => {
		new ApiCaller<ILinkReponse[]>(new GetSuperAdminLinks())
			.getPromise()
			.then(setLinks);
	},[]);
	return (
		<section>
			<Table 
				data={links} 
				columns={columns}
				title={"URL"}/>
		</section>
	);
};

export default Other;