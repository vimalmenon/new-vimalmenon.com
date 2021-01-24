import {METHODS} from "enums";

class ApiCaller<T> {
	private controller;
	private signal;
	private promise;
	private isSpinning;

	constructor(data:IApi) {
		this.isSpinning = true;
	}
	
}

export default ApiCaller;