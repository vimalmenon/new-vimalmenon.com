import React from "react";

import {api} from "model";
import {ApiCaller} from "utility";
import {Link} from "./index.d";

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
			{links.map((data, key) => {
				return (
					<div key={key}>
						<div>{data.name}</div>
					</div>
				);
			})}
			this is other page
		</section>
	);
};

export default Other;