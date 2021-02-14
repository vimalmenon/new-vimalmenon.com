import React from "react";
import { useSelector } from "react-redux";

import {spinner} from "utility";


const Home:React.FC = () => {
	const state = useSelector<IState>((state) =>state);
	console.log(state);
	return (
		<div>
			<button onClick={() => spinner.startSpinner()}>
				loading
			</button>
			this is admin home page
		</div>
	);
};

export default Home;