interface ISession {
}

type ThemeType = "light"|"dark";

interface IAdmin {
	isSidebarOpen:boolean
}

interface IConfig {
	currentLocation:string;
	themeType:ThemeType;
	loading:boolean;
}
interface ISessionState {
	id?: number;
	user?:string;
	group?: string;
}
interface ISocialMedia {
	name:string;
	title:string;
	url: string;
}

interface IMisc {
	socialMedias:ISocialMedia[]
}

interface IState {
	pendingTask?:number,
	session:ISession;
	config:IConfig;
	admin:IAdmin;
	misc:IMisc;
}