import {storage} from "service";
import {THEME} from "const";

const getTheme = () => {
    const storageValue = storage.setLocalStorage().getValue();
    return storageValue[THEME];
};
const toggleTheme = () => {
    
};


export default {
    getTheme,
    toggleTheme
};