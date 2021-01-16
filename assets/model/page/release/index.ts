const release = [
	{
		versionNo:"v0.0.4.a",
		buildDate:"24 Jan 2021",
		details:[
			"Fixed image reference issue",
			"Added announcements sections"
		]
	},
	{
		versionNo:"v0.0.3.a",
		buildDate:"16 Jan 2021",
		details:[
			"New Logo design",
			"New Favicon",
			"GZip enabled",
			"More Meta tag added",
			"Fixed lighthouse issues",
			"Bug Fixes",
			"New Carousel / Hero introduced",
			"Refactoring"
		]
	},
	{
		versionNo:"v0.0.2.a",
		buildDate:"10 Jan 2021",
		show:false,
		details:[
			"Introduced Service worker",
			"PWA feature",
			"Favicon added",
			"New logo design",
			"Pages: Release page",
			"Pages: Tutorials page",
			"YouTube videos support",
			"Fixed lighthouse issues",
			"Bug fixes"
		]
	},
	{
		versionNo:"v0.0.1.a",
		buildDate:"02 Jan 2021",
		show:false,
		details:[
			"Website hosted",
			"Added basic page",
			"Alpha version released"
		]
	},
];
const bugs = [
	"YouTube Player should be adjusted to media screen : Currently supporting larger screens only",
	"PWA not working in mobile versions",
	"Rendering very bad on the mobiles",
	"Issue with carousel on the home page",
	"Routes don't work on Refresh"
];
const features = [
	"Navigation Section : Animation should be different in Hover and active elements",
	"Backend Support : (Java Spring boot)"
];

export {
	features,
	release,
	bugs
};