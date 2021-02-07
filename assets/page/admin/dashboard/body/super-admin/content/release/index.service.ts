import {ApiCaller} from "utility";
import {api} from "model";

const {ReleaseApi} = api;

export const onSave = (releases) => {
	console.log(JSON.stringify(releases));
};

export const onInit = (setReleases) => {
	new ApiCaller<IContentResponse>(new ReleaseApi())
		.getPromise()
		.then((data) => {
			setReleases(JSON.parse(data.data));
		});
};

export const onDeleteDetail = (releases, key, innerKey) => {
	const newReleases = [...releases];
	const release = {...newReleases[key]};
	const newDetail = [...release.details];
	newDetail.splice(innerKey,1);
	newReleases.splice(key, 1, {
		...release,
		details:[...newDetail]
	});
	return newReleases;
};

export const onVersionNoUpdate = (releases, e, key) => {
	const {name, value} = e.target;
	const newReleases = [...releases];
	const release = newReleases[key];
	newReleases.splice(key, 1, {
		...release,
		[name]:value
	});
	return newReleases;
};

export const onVersionDetailUpdate = (releases, e, key) => {
	const {name, value} = e.target;
	const newReleases = [...releases];
	const release = {...newReleases[key]};
	const newDetail = [...release.details];
	newDetail[name] = value;
	newReleases.splice(key, 1, {
		...release,
		details:[...newDetail]
	});
	return newReleases;
};

export const onDetailAdd = (releases, key) => {
	const newReleases = [...releases];
	const release = {...newReleases[key]};
	const newDetail = [...release.details];
	newReleases.splice(key, 1, {
		...release,
		details:[...newDetail, ""]
	});
	return newReleases;
};