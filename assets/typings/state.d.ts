interface ISession {
}

type ThemeType = "light"|"dark";

interface IAdmin {
}

interface IConfig {
    currentLocation:string|null;
    themeType:ThemeType;
}

interface IState {
    session:ISession;
    config:IConfig;
    admin:IAdmin;
}