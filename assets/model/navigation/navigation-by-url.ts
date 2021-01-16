import {home, pageNotFound, privacyPolicy, tutorialsPage, aboutMePage} from "./main-navigation";

const navigationByUrl = {
	[home.url]:home,
	[aboutMePage.url]:aboutMePage,
	[pageNotFound.url]:pageNotFound,
	[privacyPolicy.url]:privacyPolicy,
	[tutorialsPage.url]:tutorialsPage
};

export default navigationByUrl;