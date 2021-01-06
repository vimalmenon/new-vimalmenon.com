import image1 from "../../../../image/image1.jpg";
import image2 from "../../../../image/image2.jpg";
import image3 from "../../../../image/image3.jpg";
//import image4 from "../../../../image/image4.jpg";
//import image5 from "../../../../image/image5.jpg";


const freeTutorials = {
	image:image1,
	title: "Free Video Tutorials",
	description:`My name is Vimal Menon. I am a self-taught developer, and I have learned it all on YouTube and for free. 
	I am making these video tutorials for all friends who want to follow my path and have a passion for development.`,
	buttonName:"Tutorials",
	url:"tutorials"
};
const aboutMe = {
	image:image2,
	title: "About Me",
	description:"My name is Vimal Menon. I am self taught developer. I am very passionate about development and learning new stuff.  ",
	buttonName:"About Me",
	url:"about-me"
};
const contactUs = {
	image:image3,
	title: "Contact me",
	description:"If you have some idea to share, I would like to hear it from you. ",
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