import React from "react";
import { useSelector } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import {icon} from "model";

const SocialMedia = () => {
	const socialMedias = useSelector<IState, ISocialMedia[]>((state) => state.misc.socialMedias);
	return (
		<React.Fragment>
			{socialMedias.map(({id, name, ...rest}) => {
				const Icon = icon[name];
				return(
					<Tooltip title={rest.title} aria-label={name} key={id}>
						<IconButton color="inherit">
							<Icon />
						</IconButton>
					</Tooltip>
				);
			})}
		</React.Fragment>
	);
};

export default React.memo(SocialMedia);