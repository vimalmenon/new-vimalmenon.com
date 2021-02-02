import type from "./admin.type";

export const toggleSidebar = (isSidebarOpen:boolean):IAction<{isSidebarOpen:boolean}> => {
	return {
		type:type.SET_IS_SIDEBAR_OPEN,
		payload:{
			isSidebarOpen:!isSidebarOpen
		}
	};
};

export type actionTypes = IAction<{isSidebarOpen:boolean}>;