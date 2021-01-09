interface ISession {
}

type ThemeType = "light"|"dark";

interface IAdmin {
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
	id:number;
	name:string;
	title:string;
	label:string;
	type: string;
	url: string;
}

interface IMisc {
	socialMedias:ISocialMedia[]
}

interface IState {
	session:ISession;
	config:IConfig;
	admin:IAdmin;
	misc:IMisc;
}