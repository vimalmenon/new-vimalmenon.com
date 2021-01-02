export const home:INavigation = {
	name: "Home",
	url: "/",
	title: "Vimal Menon | Free programming video tutorials",
	inPage:false
};
export const aboutMe:INavigation= {
	name: "About Me",
	url: "about-me",
	title: `About Me | ${home.title}`,
	inPage:true
};
export const tutorials:INavigation ={
	name: "Tutorials", 
	url: "tutorials",
	title: `Tutorials | ${home.title}`,
	inPage:true
};
export const contactUs:INavigation = {
	name: "Contact Us",
	url: "contact-us",
	title: `Contact Us | ${home.title}`,
	inPage:true
};
export const pageNotFound:INavigation = {
	name: "Page Not Found",
	url : "/page-not-found",
	title: `Page Not Found | ${home.title}`,
	inPage:false
};

export const tutorialsPage:INavigation = {
	name: "Tutorials",
	url : "/tutorials",
	title: `Tutorials | ${home.title}`,
	inPage:false
};
export const privacyPolicy:INavigation ={
	name: "Privacy Policy",
	url : "/privacy-policy",
	title: `Privacy Policy | ${home.title}`,
	inPage:false
};
const mainNavigation:INavigation[] = [
	aboutMe,
	tutorials,
	contactUs
];
export default mainNavigation;