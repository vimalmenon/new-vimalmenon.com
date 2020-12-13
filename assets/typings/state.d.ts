interface ISession {
}
type ThemeType = "light"|"dark";
interface IConfig {
    currentLocation:string|null;
    themeType:ThemeType;
}
interface IState {
    session:ISession;
    config:IConfig;
}