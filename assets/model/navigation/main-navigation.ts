export const home:INavigation = {
	name: "Home",
	url: "/",
	title: "Vimal Menon",
	inPage:false
};
export const aboutMe:INavigation= {
	name: "About Me",
	url: "#about-me",
	title: "About Me | Vimal Menon",
	inPage:true
};
export const tutorials:INavigation ={
	name: "Tutorials", 
	url: "#tutorials",
	title: "Tutorials | Vimal Menon",
	inPage:true
};
export const contactUs:INavigation = {
	name: "Contact Us",
	url: "#contact-us",
	title: "Contact Us | Vimal Menon",
	inPage:true
};
export const pageNotFound:INavigation = {
	name: "Page Not Found",
	url : "/page-not-found",
	title: "Page Not Found | Vimal Menon",
	inPage:false
};
const mainNavigation:INavigation[] = [
	aboutMe,
	tutorials,
	contactUs
];
export default mainNavigation;