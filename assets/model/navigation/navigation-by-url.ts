import {home, pageNotFound, privacyPolicy, tutorialsPage} from "./main-navigation";

const navigationByUrl = {
	[home.url]:home,
	[pageNotFound.url]:pageNotFound,
	[privacyPolicy.url]:privacyPolicy,
	[tutorialsPage.url]:tutorialsPage
};

export default navigationByUrl;