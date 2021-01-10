import image1 from "../../../../image/image1.jpg";
import image2 from "../../../../image/image2.jpg";
import image3 from "../../../../image/image3.jpg";
//import image4 from "../../../../image/image4.jpg";
//import image5 from "../../../../image/image5.jpg";


const freeTutorials = {
	image:image1,
	title: "Free Video Tutorials",
	description:`
		My name is Vimal Menon. I am a self-taught developer, and I have learned it all on YouTube and for free. 
		I am making these video tutorials for all friends who want to follow my path and have a passion for development.
	`,
	buttonName:"Tutorials",
	url:"tutorials"
};
const aboutMe = {
	image:image2,
	title: "About Me",
	description:`
		My name is Vimal Menon. I am a self-taught application developer, and I started with nothing, no degree, no relevant education background, no personal coaching, and nothing. Still, I was able to make a career in this industry. I worked with leading banks and many other leading sectors. I have worked on both the frontend and backend side of the application.  
	`,
	buttonName:"About Me",
	url:"about-me"
};
const contactUs = {
	image:image3,
	title: "Contact me",
	description:`
		If you guys have some ideas or projects to execute and If you need any help. Feel free to contact me at support@vimalmenon.com or one of the contact means in the Contact Us section.
	`,
	buttonName:"Contact Us",
	url:"contact-us"
};

const sliders = [
	freeTutorials,
	aboutMe,
	contactUs
];

export default {
	sliders
};