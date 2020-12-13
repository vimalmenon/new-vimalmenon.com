import {config} from "action";
import {Location} from "history";
import store from "store";

const init:(value:Location)=>void = ({pathname}):void => {
	store.dispatch(config.setLocation(pathname));
};

export default {
	init
};