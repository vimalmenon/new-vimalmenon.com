import React from "react";

const YTPlayer:React.FC<IYTPlayer> = ({videoId, videoName, className}) => {
	const {host} = location;
	return (
		<iframe 
			title={videoName}
			className={className}
			src={`https://www.youtube.com/embed/${videoId}?origin=${host}`}
			frameBorder="0" />
	);
};

export default YTPlayer;