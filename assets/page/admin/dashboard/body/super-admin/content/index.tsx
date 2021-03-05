import React from "react"; 
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


import Release from "./release";
import ContentComponent from "./content";
import Tutorial from "./tutorial";
import Announcement from "./announcement";
import Link from "./link";

import Box from "@material-ui/core/Box";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
	return createStyles({
		root: {
			display:"flex",
			flex: "1 1 100%",
			flexDirection:"column"
		}
	});
});

function TabPanel (props) {
	const { children, value, index, ...other } = props;
	return (
		<div role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}>
			{value === index && ( 
				<Box component="div" p={3}>
					{children}
				</Box>
			)}
		</div>
	);
}

const Content:React.FC = () => {
	const [value, setValue] = React.useState<number>(0);
	const handleChange = (e,newValue:number) => {
		setValue(newValue);
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				indicatorColor="secondary"
				textColor="secondary"
				onChange={handleChange}>
				<Tab label="Content" />
				<Tab label="Release" />
				<Tab label="Tutorial" />
				<Tab label="Announcement" />
				<Tab label="Link" />
			</Tabs>
			<TabPanel value={0} index={value}>
				<ContentComponent />
			</TabPanel>
			<TabPanel value={1} index={value}>
				<Release />
			</TabPanel>
			<TabPanel value={2} index={value}>
				<Tutorial />
			</TabPanel>
			<TabPanel value={3} index={value}>
				<Announcement />
			</TabPanel>
			<TabPanel value={4} index={value}>
				<Link />
			</TabPanel>
		</div>
	);
};

export default Content;