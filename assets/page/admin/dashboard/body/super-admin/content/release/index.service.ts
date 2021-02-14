import React from "react";

import {ApiCaller} from "utility";
import {api} from "model";


const {ReleaseApi} = api;


export const apiCall = (setReleases):void => {
	new ApiCaller<IContentResponse>(new ReleaseApi())
		.getPromise()
		.then((data) => setReleases(JSON.parse(data.data)));
};

export const useInitData = () => {
	const [releases, setReleases] = React.useState<IReleaseResponse[]>([]);
	React.useEffect(() => apiCall(setReleases),[]);
	const onDetailAdd = (key:number) => {
		const newReleases = [...releases];
		const newRelease = newReleases[key];
		newReleases.splice(key, 1, {
			...newRelease,
			details:[...newRelease.details, ""]
		});
		setReleases(newReleases);
	};
	const onDetailDelete = (key:number, innerKey:number) => {
		const newReleases = [...releases];
		const release = {...newReleases[key]};
		const newDetail = [...release.details];
		newDetail.splice(innerKey,1);
		newReleases.splice(key, 1, {
			...release,
			details:[...newDetail]
		});
		setReleases(newReleases);
	};
	const onReleaseUpdate = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key:number, innerkey?:number) => {
		const {name, value} = e.target;
		const newReleases = [...releases];
		const newRelease = newReleases[key];
		if(innerkey !== undefined) {
			const release = {...newReleases[key]};
			const newDetail = [...release.details];
			newDetail[innerkey] = value;
			newReleases.splice(key, 1, {
				...release,
				details:[...newDetail]
			});
		} else {
			newReleases.splice(key, 1, {
				...newRelease,
				[name]:value
			});
		}
		setReleases(newReleases);
	};
	const onSave = () => {
		console.log(JSON.stringify(releases));
	};
	return {releases, onReleaseUpdate, onDetailAdd, onDetailDelete, onSave};
};