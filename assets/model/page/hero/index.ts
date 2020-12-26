import image1 from "../../../image/image1.jpg";
import image2 from "../../../image/image2.jpg";
//import image3 from "../../../../../image/image3.jpg";
//import image4 from "../../../../../image/image4.jpg";
import image5 from "../../../image/image5.jpg";

const aboutMe = {
	image:image1,
	title: "",
	buttonName:"About Me",
	url:"about-me"
};
const tutorials = {
	image:image2,
	buttonName:"Tutorials",
	url:"tutorials"
};
const contactUs = {
	image:image5,
	buttonName:"Contact Us",
	url:"contact-us"
};

const sliders = [
	aboutMe,
	tutorials,
	contactUs
];

export default {
	sliders
};