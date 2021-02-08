import {ApiCaller} from "utility";
import {api} from "model";

const {ReleaseApi} = api;

export const onSave = (releases:IReleaseResponse[]):void => {
	console.log(JSON.stringify(releases));
};

export const onInit = (setReleases):void => {
	new ApiCaller<IContentResponse>(new ReleaseApi())
		.getPromise()
		.then((data) => {
			setReleases(JSON.parse(data.data));
		});
};

export const onDeleteDetail:(release:IReleaseResponse[], key:number, innerKey:number) => IReleaseResponse[] = (releases, key, innerKey) => {
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

export const onVersionNoUpdate:(release:IReleaseResponse[], e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, innerKey:number) => IReleaseResponse[] = (releases, e, key) => {
	const {name, value} = e.target;
	const newReleases = [...releases];
	const release = newReleases[key];
	newReleases.splice(key, 1, {
		...release,
		[name]:value
	});
	return newReleases;
};

export const onVersionDetailUpdate:(release:IReleaseResponse[], e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, innerKey:number) => IReleaseResponse[] = (releases, e, key) => {
	const {name, value} = e.target;
	const newReleases = [...releases];
	const release = {...newReleases[key]};
	const newDetail = [...release.details];
	newDetail[parseInt(name)] = value;
	newReleases.splice(key, 1, {
		...release,
		details:[...newDetail]
	});
	return newReleases;
};

export const onDetailAdd:(release:IReleaseResponse[], key:number) => IReleaseResponse[] = (releases, key) => {
	const newReleases = [...releases];
	const release = {...newReleases[key]};
	const newDetail = [...release.details];
	newReleases.splice(key, 1, {
		...release,
		details:[...newDetail, ""]
	});
	return newReleases;
};