import React from "react";

const YTPlayer:React.FC<{videoId:string; videoName:string}> = ({videoId, videoName}) => {
	const {host} = location;
	return (
		<iframe title={videoName} width="100%" height="360"
			src={`https://www.youtube.com/embed/${videoId}?origin=${host}`}
			frameBorder="0" />
	);
};

export default YTPlayer;