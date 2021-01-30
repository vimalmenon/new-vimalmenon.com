import React from "react";

import {pageConfig, api} from "model";

import {TextFormat, Container, PageTitle} from "component";
import {ApiCaller} from "utility";
import {
	makeStyles,
	createStyles,
	Theme,
} from "@material-ui/core/styles";

const {paragraph} = pageConfig.common;
const {PrivacyPolicyApi} = api;

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection: "column"
		},
		title:{
			display: "flex",
			margin:theme.spacing(2,0)
		},
		content:{
			display: "flex",
			flexDirection: "column",
			lineHeight:paragraph.lineHeight,
			fontSize:paragraph.fontSize,
			margin:theme.spacing(2,0),
			"& a":{
				color:theme.palette.text.primary
			},
			"& >div >div":{
				textIndent:"5em",
				margin:theme.spacing(1,0)
			}
		}
	});
});

const PrivacyPolicyPage:React.FC = () => {
	const classes = useStyles();
	const [data, setData] = React.useState<{title:string,data:string}>({title:"", data:""});
	React.useEffect(() => {
		new ApiCaller<{title:string,data:string}>(new PrivacyPolicyApi())
			.getPromise()
			.then(setData);
	},[])
	return (
		<Container>
			<div className={classes.root}>
				<div className={classes.title}>
					<PageTitle title={data.title} />
				</div>
				<div className={classes.content}>
					<TextFormat 
						text={data.data} />
				</div>
			</div>
		</Container>
	);
};

export default PrivacyPolicyPage; 