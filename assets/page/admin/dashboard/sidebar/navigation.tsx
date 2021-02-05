import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory } from "react-router-dom";


const Navigation:React.FC<{navigations:INavigation[]}> = ({navigations}) => {
	const history = useHistory();
	return (
		<List>
			{navigations.map((navigation, key) => {
				return (
					<React.Fragment key={key}>
						<ListItem
							button
							onClick={() => history.push(navigation.url)}>
							<ListItemText primary={navigation.name} />			
						</ListItem>
						{navigation.navigations && <Navigation navigations={navigation.navigations} />}
					</React.Fragment>
				);
			})}
		</List>
	);
};

export default Navigation;