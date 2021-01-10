

type ChilderenType = JSX.Element[] | JSX.Element;
interface IEntitlement<T> {
    name:string;
    Component:T;
}

interface IContainer {
    dark?:boolean; 
    children:ChilderenType
}

interface IPageTitle {
    title:string;
}

interface IYTPlayer {
    videoId:string; 
    videoName:string; 
    className:string
}