//import {METHODS} from "enums";
import spinner from "../spinner";

class ApiCaller<T> {
	private controller;
	private promise;
	private isSpinning;

	constructor(data:IApi) {
		this.controller = new AbortController();
		const signal = this.controller.signal;
		this.isSpinning = true;
		spinner.startSpinner();
		this.promise = new Promise<T>((resolve, reject) => {
			this.isSpinning = true;
			fetch(data.url, {
				method: data.method, 
				signal, 
				body:data.body,
				headers: {
					"Content-Type": "application/json"
				}})
				.then((response) => {
					spinner.stopSpinner();
					this.isSpinning = false;
					return response.json();
				})
				.then((response:IResponse<T>) => {
					if (response.code === 0) {
						resolve(response.data);
					} else {
						reject(response.data);
					}
				})
				.catch((rejected) => {
					if (this.isSpinning){
						spinner.stopSpinner();
						this.isSpinning = false;
					}
					reject(rejected);
				});
		});
	}
	public getPromise ():Promise<T> {
		return this.promise;
	}
	public abort ():void {
		if (this.isSpinning){
			spinner.stopSpinner();
			this.isSpinning = false;
		}
		this.controller.abort();
	}
	
}

export default ApiCaller;