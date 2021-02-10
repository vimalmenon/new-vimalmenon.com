import React from "react"; 
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


import Release from "./release";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function TabPanel (props) {
	const { children, value, index, ...other } = props;
	return (
		<div role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}>
			{value === index && ( 
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const Content:React.FC = () => {
	const [value,] = React.useState("one");
	return (
		<div>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary">
				<Tab label="Release" />
				<Tab label="Active" />
			</Tabs>
			<TabPanel value={value} index="one">
				<Release />
			</TabPanel>
			
		</div>
	);
};

export default Content;