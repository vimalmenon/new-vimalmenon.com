export const homeAdmin:INavigation = {
	name: "Home",
	url: "/admin",
	title: "Admin | Free programming video tutorials",
	inPage:false
};

export const otherAdminConfig:INavigation = {
	name: "Other Config",
	url: "/admin/super_admin/other",
	title: "Other Config | Free programming video tutorials",
	inPage:false
};

export const adminContent:INavigation = {
	name: "Content",
	url: "/admin/super_admin/content",
	title: "Content Editor | Free programming video tutorials",
	inPage:false,
	
};

export const superAdmin:INavigation = {
	name: "Super Admin",
	url: "/admin/super_admin",
	title: "Super Admin | Free programming video tutorials",
	inPage:false,
	navigations: [
		otherAdminConfig,
		adminContent
	]
};

export const adminNavigation:INavigation[] = [
	homeAdmin,
	superAdmin
];
export default {
	adminNavigation
};