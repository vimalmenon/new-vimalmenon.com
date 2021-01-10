import React from "react";


interface IMap<T> {
	items?:T[];
	renderItem:(item:T, key:number) => ChilderenType
}

function useMap<T>():React.FC<IMap<T>> { 
	return ({items=[], renderItem}) => {
		return (
			<React.Fragment>
				{items.map((item, key) => {
					return (
						<React.Fragment key={key}>
							{renderItem(item, key)}
						</React.Fragment>
					);	
				})}
			</React.Fragment>
		);
	}; 
}

export default useMap;