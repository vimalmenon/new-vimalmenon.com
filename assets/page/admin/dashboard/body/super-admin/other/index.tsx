import React from "react";

import {api} from "model";
import {ApiCaller} from "utility";
import {Link} from "./index.d";
import {Table} from "component";

const {SuperAdminLinks} = api;

const Other:React.FC = () => {
	const [links, setLinks] = React.useState<Link[]>([]);
	React.useEffect(() => {
		new ApiCaller<Link[]>(new SuperAdminLinks())
			.getPromise()
			.then(setLinks);
	},[]);
	return (
		<section>
			<Table data={links}/>
		</section>
	);
};

export default Other;