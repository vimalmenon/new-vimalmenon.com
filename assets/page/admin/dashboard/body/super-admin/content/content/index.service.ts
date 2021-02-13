import {ApiCaller} from "utility";
import {api} from "model_admin";
import {IContent, UseInitDataType} from "./index.d";
import React from "react";

const {GetSuperAdminContents} = api;

const callApi = (setData) => {
	new ApiCaller<IContent[]>(new GetSuperAdminContents)
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
		console.log(name, value, type, key, innerKey);
		if (type ==="checkbox") {
			value = checked;
		}
		const newData = [...data];
		const item = newData[key];
		if (innerKey) {
			const newContentData = [...item.contentData];
			const newContent = newContentData[innerKey];
			newContentData.splice(innerKey, 1, {
				...newContent,
				[name]:value
			});
			item[key].contentData[innerKey] = newContentData;
			setData(newData);
		} else {
			newData.splice(key, 1, {
				...item,
				[name]:value
			});
			setData(newData);
		}
	};
	return {refresh, data, onValueUpdate};
};