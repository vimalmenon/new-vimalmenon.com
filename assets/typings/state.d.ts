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

interface IMisc {
    socialMedias:[]
}

interface IState {
    session:ISession;
    config:IConfig;
    admin:IAdmin;
    misc:IMisc;
}