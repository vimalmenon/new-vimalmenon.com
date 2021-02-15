import React from "react";

import {useInitData} from "./index.service";
import {Table} from "component_admin";


const Link:React.FC = () => {
	const {links, columns} = useInitData();
	return (
		<div>
			<Table
				data={links} 
				columns={columns}
				title={"URL"}
				editable={
					{
						onRowAdd: newData =>
							new Promise((resolve, reject) => {
								console.log(newData);
							}),
						onRowUpdate: (newData, oldData) =>
							new Promise((resolve, reject) => {
								console.log(newData, oldData);
							}),
						onRowDelete: oldData =>
							new Promise((resolve, reject) => {
								console.log(oldData);
							}),
					}}/>
		</div>
	);
};


export default Link;