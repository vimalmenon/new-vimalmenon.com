import {ApiCaller} from "utility";
import {api} from "model_admin";
import {IContent, UseInitDataType} from "./index.d";
import React from "react";

const {GetSuperAdminContents, SaveSuperAdminContents} = api;

const callApi = (setData) => {
	new ApiCaller<IContent[]>(new GetSuperAdminContents())
		.getPromise()
		.then(setData);
};
export const useInitData:UseInitDataType = () => {
	const [data, setData] = React.useState<IContent[]>([]);
	React.useEffect(() => callApi(setData), []);

	const refresh = () => callApi(setData);
	const onValueUpdate = (e, key:number, innerKey?:number) => {
		const {name, type, checked} = e.target;
		let {value} = e.target;
		if (type ==="checkbox") {
			value = checked;
		}
		const newData = [...data];
		const item = newData[key];
		if (innerKey !==undefined && innerKey !== null) {
			const newContentData = [...item.contentData];
			const newContent = newContentData[innerKey];
			newContentData.splice(innerKey, 1, {
				...newContent,
				[name]:value
			});
			item.contentData = newContentData;
		} else {
			newData.splice(key, 1, {
				...item,
				[name]:value
			});
		}
		setData(newData);
	};
	const onSave = () => {
		new ApiCaller<IContent[]>(new SaveSuperAdminContents<IContent[]>(data))
			.getPromise()
			.then(setData);
	};
	return {refresh, data, onValueUpdate, onSave};
};