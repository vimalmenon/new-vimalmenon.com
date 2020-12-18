import {storage} from "service";
import {THEME, DEFAULT_THEME} from "const";

import {config} from "action";

const setTheme = () => {
	const storageValue = storage.setLocalStorage().getValue();
	const theme:ThemeType = storageValue[THEME]||DEFAULT_THEME;
	config.setTheme(theme);
};
const toggleTheme = () => {
	config.toggleTheme();
};

export default {
	setTheme,
	toggleTheme
};