import store from "store";
import {admin} from "action";

export const toogleSidebar:IVoidOneParamMethod<boolean> = (sidebar) => {
	store.dispatch(admin.toggleSidebar(sidebar));
};