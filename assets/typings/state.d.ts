interface ISession {
}

type ThemeType = "light"|"dark";

interface IAdmin {
}

interface IConfig {
    currentLocation:string|null;
    themeType:ThemeType;
    loading:boolean;
}

interface ISocialMedia {
    id:number;
    name:string;
    title:string;
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