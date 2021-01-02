import React from "react";

import {page} from "model";

import {TextFormat, Container} from "component";

const PrivacyPolicyPage:React.FC = () => {
	const {PrivacyPolicy} = page;
	return (
		<div>
			<Container dark={false}>
				<TextFormat 
					text={PrivacyPolicy} />
			</Container>
		</div>
	);
};

export default PrivacyPolicyPage; 