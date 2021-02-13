import React from "react"; 
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";


import Release from "./release";
import ContentComponent from "./content";
import Tutorials from "./tutorials";

import Box from "@material-ui/core/Box";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
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
	const handleChange = (event:any, newValue:number) => {
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
				<Tab label="Tutorials" />
			</Tabs>
			<TabPanel value={0} index={value}>
				<ContentComponent />
			</TabPanel>
			<TabPanel value={1} index={value}>
				<Release />
			</TabPanel>
			<TabPanel value={2} index={value}>
				<Tutorials />
			</TabPanel>
		</div>
	);
};

export default Content;