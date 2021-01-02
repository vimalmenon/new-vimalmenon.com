import {config} from "action";
import {Location} from "history";
import store from "store";

import {navigation} from "model";

const init:(value:Location)=>void = ({pathname}):void => {
	store.dispatch(config.setLocation(pathname));
};

const getMetaDataFromUrl = (path:string):INavigation => {
	return navigation.navigationByUrl[path];
};

export default {
	getMetaDataFromUrl,
	init
};