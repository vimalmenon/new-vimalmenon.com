import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {onSave} from "./index.service";

const Release:React.FC = () => {
	const [releases, setReleases] = React.useState<IRelease[]>(
		[
			{
				versionNo:"v0.0.4.a",
				buildDate:"24 Jan 2021",
				details:[
					"Fixed image reference issue",
					"Pages: announcements page",
					"Move to top feature added",
					"Added explore section",
					"Added latest section",
					"Refactoring",
				]
			}
		]
	);
	const onVersionNoUpdate = (e, key) => {
		const {name, value} = e.target;
		const newReleases = [...releases];
		const release = newReleases[key];
		newReleases.splice(key, 1, {
			...release,
			[name]:value
		});
		setReleases(newReleases);
	};
	const onVersionDetailUpdate = (e, key) => {
		const {name, value} = e.target;
		const newReleases = [...releases];
		const release = {...newReleases[key]};
		const newDetail = [...release.details];
		newDetail[name] = value;
		newReleases.splice(key, 1, {
			...release,
			details:[...newDetail]
		});
		setReleases(newReleases);
	};
	const onDetailAdd = (e, key) => {
		console.log(e, key);
	};
	const onDeleteDetail = (key, innterKey) => {
		console.log(key, innterKey);
	};
	return (
		<div>
			{releases.map((data, key) => {
				return (
					<div key={key}>
						<TextField 
							label="Version No" 
							name="versionNo" 
							color="secondary" 
							value={data.versionNo}
							onChange={(e) => onVersionNoUpdate(e, key)} />
						<div>
							Features <button onClick={(e) => onDetailAdd(e,key)}>Add</button>
						</div>
						{data.details.map((detail, innerkey) => {
							return (
								<div key={innerkey}>
									<TextField 
										color="secondary"
										name={`${innerkey}`}
										value={detail} 
										onChange={(e) => onVersionDetailUpdate(e, key)}/>
									<button onClick={() => onDeleteDetail(key, innerkey)}>
										Delete
									</button>
								</div>
							);
						})}
					</div>
				);
			})}
			<div>
				<Button variant="contained" color="secondary" onClick={() => onSave(releases)}>
					Save
				</Button>
			</div>
		</div>
	);
};

export default Release;