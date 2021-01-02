import {home, pageNotFound} from "./main-navigation";

const navigationByUrl = {
	[home.url]:home,
	[pageNotFound.url]:pageNotFound
};

export default navigationByUrl;