import {ThemeSelectorType} from "./index.d";

export const themeSelector:ThemeSelectorType = (theme) => {
	if (theme === "dark") {
		return "twilight";
	}
	return "github";
};