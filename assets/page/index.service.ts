import {theme, ApiCaller} from "utility";
import {api} from "model";
import {misc, config} from "action";
import store from "store";

export const init:IVoidNoParamMethod = () => {
	theme.setTheme();
	new ApiCaller<IApiResponse>(new api.MainApi())
		.getPromise()
		.then((data) => {
			store.dispatch(misc.setSocialMedias(data.socialMedias));
			store.dispatch(config.setLoading(false));
		});
};