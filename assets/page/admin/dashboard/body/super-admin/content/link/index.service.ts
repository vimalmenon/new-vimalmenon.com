import React from "react";

import {api, table} from "model_admin";
import {ApiCaller} from "utility";

const columns = table.links

const {GetSuperAdminLinks, SaveSuperAdminLinks, DeleteSuperAdminLinks} = api;

const init = (setLinks) => {
	new ApiCaller<ILinkReponse[]>(new GetSuperAdminLinks())
		.getPromise()
		.then(setLinks);
};
export const useInitData = () => {
	const [links, setLinks] = React.useState<ILinkReponse[]>([]);
	React.useEffect(() => init(setLinks),[]);
	const onSave = (data) => {
		return new ApiCaller<ILinkReponse[]>(new SaveSuperAdminLinks([data]))
			.getPromise()
			.then(setLinks);
	};
	const onEdit = (data) => {
		return new ApiCaller<ILinkReponse[]>(new SaveSuperAdminLinks([data]))
			.getPromise()
			.then(setLinks);
	};
	const onDelete = (data) => {
		return new ApiCaller<ILinkReponse[]>(new DeleteSuperAdminLinks([data]))
			.getPromise()
			.then(setLinks);
	}
	return {links, columns, onSave, onEdit, onDelete}
};