import React from "react";
import { Link } from "react-router-dom";

const Admin:React.FC = () => {
	return (
		<div>
			This is admin

			<Link to="/admin/test">tesst</Link> 
			<Link to="/admin/page">pagex</Link> 
			<Link to="/admin/read">read</Link> 
			<Link to="/">Home</Link> 
		</div>
	);
};


export default Admin;