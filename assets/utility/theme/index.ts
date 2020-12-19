import {storage} from "service";
import {THEME, DEFAULT_THEME} from "const";

import {config} from "action";

const setTheme:IVoidNoParamMethod = () => {
	const storageValue = storage.setLocalStorage().getValue();
	const theme:ThemeType = storageValue[THEME]||DEFAULT_THEME;
	config.setTheme(theme);
};
const toggleTheme:IVoidNoParamMethod = () => {
	const storageValue = storage.setLocalStorage().getValue();
	const theme:ThemeType = storageValue[THEME]||DEFAULT_THEME;
	storage.setLocalStorage().addValue({[THEME]:(theme==="light")?"dark":"light"});
	config.toggleTheme();
};

export default {
	setTheme,
	toggleTheme
};