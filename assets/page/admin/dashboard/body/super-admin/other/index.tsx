import React from "react";

import {api} from "model";
import {ApiCaller} from "utility";
import {Table} from "component";

const {SuperAdminLinks} = api;


const columns = [
	{ title: "Id", field: "id" },
	{ title: "Name", field: "name" },
	{ title: "Title", field: "title"},
	{ title: "URL", field: "url"}
];
const Other:React.FC = () => {
	const [links, setLinks] = React.useState<ILinkReponse[]>([]);
	React.useEffect(() => {
		new ApiCaller<ILinkReponse[]>(new SuperAdminLinks())
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