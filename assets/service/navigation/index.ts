import {config} from "action";


const init = ({pathname}):void => {
	config.setLocation(pathname);
};

export default {
	init
};