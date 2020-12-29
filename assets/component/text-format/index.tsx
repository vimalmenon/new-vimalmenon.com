import React from "react";

const TextFormat:React.FC<{text:string}> = ({text}) => {
	const createMarkup = (html) => {
		return {__html: html.trim()};
	};
	return(
		<span dangerouslySetInnerHTML={createMarkup(text)} />
	);
};

export default TextFormat;