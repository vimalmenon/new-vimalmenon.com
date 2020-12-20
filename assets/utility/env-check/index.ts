import {APP_ENV} from "const";
import {ComingSoon} from "component";

const envCheck = (Component:React.FunctionComponent):React.FunctionComponent => {
	return APP_ENV==="PROD"? ComingSoon:Component;
};

export default envCheck;