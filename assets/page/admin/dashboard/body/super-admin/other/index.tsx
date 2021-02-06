import React from "react";

import {api} from "model";
import {ApiCaller} from "utility";
import {Link} from "./index.d";
import {Table} from "component";

const {SuperAdminLinks} = api;


const columns = [
	{ title: "Id", field: "id" , test:"read"},
	{ title: "Name", field: "name" },
	{ title: "Title", field: "title"},
	{ title: "URL", field: "url"}
];
const Other:React.FC = () => {
	const [links, setLinks] = React.useState<Link[]>([]);
	React.useEffect(() => {
		new ApiCaller<Link[]>(new SuperAdminLinks())
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