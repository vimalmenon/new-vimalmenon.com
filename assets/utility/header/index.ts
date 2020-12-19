import  {storage} from "service";
import {HEADER} from "const";

const getHeader:IReturnNoParamMethod<string> = () => {
	const storageValue = storage.setSessionStorge().getValue();
	return storageValue[HEADER]||"";
};

const setHeader:IVoidOneParamMethod<string> = (header:string) => {
	storage.setSessionStorge().addValue({[HEADER]:header});
};

export default {
	getHeader,
	setHeader,
};