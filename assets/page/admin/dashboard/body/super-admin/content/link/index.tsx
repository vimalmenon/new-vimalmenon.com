import React from "react";

import {useInitData} from "./index.service";
import {Table} from "component_admin";


const Link:React.FC = () => {
	const {links, columns, onSave, onEdit, onDelete} = useInitData();
	return (
		<div>
			<Table
				data={links} 
				columns={columns}
				title={"URL"}
				editable={{
					onRowAdd: data => onSave(data),
					onRowUpdate: data =>onEdit(data),
					onRowDelete: data => onDelete(data),
				}}/>
		</div>
	);
};


export default Link;