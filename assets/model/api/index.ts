import { METHODS } from "enums";

interface IApi {
    name: string;
    method : string;
    url : string;
    body?: string;
}

export class Api implements IApi{
	public name;
	public method;
	public url;
	public body;
	public headers;
	constructor (name: string, method: METHODS, url: string) {
		this.name = name;
		this.method = method;
		this.url = url;
	}
	public setApiData<T>(data:T):void {
		this.body = JSON.stringify(data);
	}
}



export default {
};