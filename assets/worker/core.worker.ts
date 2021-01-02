const ctx:Worker= self as any;



const test = (id) => {
	ctx.postMessage({status:"success", id, data:"vimal Menon"});
};
const process = {
	test
};

ctx.addEventListener("message", ({data}) => {
	const exec = process[data.processName];
	if (exec) {
		exec.call(this,data.id,data.data);
	} else {
		ctx.postMessage({status:"error", id:data.id});
	}
	
});
export default null;