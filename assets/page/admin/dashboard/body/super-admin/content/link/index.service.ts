import React from "react";

import {api, table} from "model_admin";
import {ApiCaller} from "utility";

const columns = table.links

const {GetSuperAdminLinks} = api;

export const useInitData = () => {
	const [links, setLinks] = React.useState<ILinkReponse[]>([]);
	React.useEffect(() => {
		new ApiCaller<ILinkReponse[]>(new GetSuperAdminLinks())
			.getPromise()
			.then(setLinks);
	},[]);
	return {links, columns}
};