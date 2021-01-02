import Worker from "worker-loader!../../worker/core.worker.ts";


class WorkerClass {
	private worker:Worker;
	private id:number;
	private map;
	constructor () {
		this.id=0;
		this.worker = new Worker();
		this.map = new Map();
		this.worker.onmessage = this.success.bind(this);
	}
	public processMessage<T, K>(processName:string, data:T) {
		return new Promise<K>((resolve, reject) => {
			this.worker.postMessage({id:this.id,processName, data});
			this.map.set(this.id, {
				resolve,
				reject
			});
			this.id++;
		});
	}
	public success ({data}) {
		if(data.status === "success") {
			this.map.get(data.id).resolve(data.data);
		} else {
			this.map.get(data.id).reject();
		}
		this.map.delete(data.id);
	}
}


export default new WorkerClass();