import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {onSave, onInit, onDeleteDetail, onVersionNoUpdate, onVersionDetailUpdate, onDetailAdd} from "./index.service";


const Release:React.FC = () => {
	const [releases, setReleases] = React.useState<IReleaseResponse[]>([]);
	React.useEffect(() => {
		onInit(setReleases);
	},[]);
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
							onChange={(e) => setReleases(onVersionNoUpdate(releases, e, key))} />
						<div>
							Features <button onClick={() => setReleases(onDetailAdd(releases, key))}>Add</button>
						</div>
						{data.details.map((detail, innerkey) => {
							return (
								<div key={innerkey}>
									<TextField 
										color="secondary"
										name={`${innerkey}`}
										value={detail} 
										onChange={(e) => setReleases(onVersionDetailUpdate(releases, e, key))}/>
									<button onClick={() => setReleases(onDeleteDetail(releases, key, innerkey))}>
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