import {storage} from "service";
import {THEME, DEFAULT_THEME} from "const";

import {config} from "action";
import store from "store";

const setTheme:IVoidNoParamMethod = () => {
	const storageValue = storage.setLocalStorage().getValue();
	const theme:ThemeType = storageValue[THEME]||DEFAULT_THEME;
	store.dispatch(config.setTheme(theme));
};
const toggleTheme:IVoidNoParamMethod = () => {
	const storageValue = storage.setLocalStorage().getValue();
	const theme:ThemeType = storageValue[THEME]||DEFAULT_THEME;
	storage.setLocalStorage().addValue({[THEME]:(theme==="light")?"dark":"light"});
	store.dispatch(config.setTheme((theme==="light")?"dark":"light"));
};

export default {
	setTheme,
	toggleTheme
};