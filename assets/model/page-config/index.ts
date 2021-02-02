import common from "./common";
import home from "./home";
import admin from "./admin";

const header = {
	top:{
		height:"63px"
	},
	bottom:{
		height:"63px"
	}
};
const footer = {
	top :{
	},
	bottom :{
		height:"63px"
	}
};

const pageConfig = {
	admin,
	common,
	header,
	footer,
	home,
};

export default pageConfig;