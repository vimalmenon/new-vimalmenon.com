import React from "react";
import { useSelector } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EmailIcon from "@material-ui/icons/Email";
import Link from "@material-ui/core/Link";
import {notification, clipBoard} from "utility";

import {icon} from "model";

const SocialMedia = () => {
	const socialMedias = useSelector<IState, ISocialMedia[]>((state) => state.misc.socialMedias);
	const copy = (value) => {
		clipBoard(value).then(() => {
			notification.addMessage("Copied Email address to clipboard");
		});
	};
	return (
		<React.Fragment>
			{socialMedias.map(({id, name, ...rest}) => {
				const Icon = icon[name];
				return(
					<Tooltip title={rest.title} aria-label={name} key={id}>
						<Link href={rest.url} target="_blank" color="inherit" rel="noreferrer">
							<IconButton color="inherit" aria-label={rest.label}>
								<Icon />
							</IconButton>
						</Link>
					</Tooltip>
				);
			})}
			<Tooltip title={"support@vimalmenon.com"} aria-label={"support@vimalmenon.com"}>
				<IconButton color="inherit" onClick={() => copy("support@vimalmenon.com")} aria-label="Copy email">
					<EmailIcon/> 
				</IconButton>
			</Tooltip>
		</React.Fragment>
	);
};

export default React.memo(SocialMedia);