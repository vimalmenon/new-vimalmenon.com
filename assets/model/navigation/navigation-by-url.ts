import {home, pageNotFound, privacyPolicy, tutorialsPage, aboutMePage, release, announcements} from "./main-navigation";

const navigationByUrl = {
	[home.url]:home,
	[aboutMePage.url]:aboutMePage,
	[pageNotFound.url]:pageNotFound,
	[privacyPolicy.url]:privacyPolicy,
	[tutorialsPage.url]:tutorialsPage,
	[release.url]:release,
	[announcements.url]:announcements
};

export default navigationByUrl;