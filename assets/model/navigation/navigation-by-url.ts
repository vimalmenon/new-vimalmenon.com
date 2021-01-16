import {home, pageNotFound, privacyPolicy, tutorialsPage, aboutUs} from "./main-navigation";

const navigationByUrl = {
	[home.url]:home,
	[aboutUs.url]:aboutUs,
	[pageNotFound.url]:pageNotFound,
	[privacyPolicy.url]:privacyPolicy,
	[tutorialsPage.url]:tutorialsPage
};

export default navigationByUrl;