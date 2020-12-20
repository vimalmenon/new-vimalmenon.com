import {APP_ENV} from "const";

const envCheck = ():boolean => {
	return APP_ENV==="PROD";
};

export default envCheck;