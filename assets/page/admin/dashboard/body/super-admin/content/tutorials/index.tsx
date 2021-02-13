import React from "react";

import {useInitData} from "./index.service";

const Tutorial:React.FC = () => {
	const [tutorials] = useInitData();
	return (
		<div>
			{tutorials.map((tutorial, key) => {
				return (
					<div key={key}>
						{tutorial.name}
					</div>
				);
			})}
		</div>
	);
};

export default Tutorial;