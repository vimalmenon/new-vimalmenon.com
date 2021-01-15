import React from "react";

const TextFormat:React.FC<ITextFormat> = ({text, className}) => {
	const createMarkup = (html) => {
		return {__html: html.trim()};
	};
	return(
		<div 
			className={className} 
			dangerouslySetInnerHTML={createMarkup(text)} />
	);
};

export default TextFormat;