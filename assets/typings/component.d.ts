interface IEntitlement<T> {
    name:string;
    Component:T;
}

type ChilderenType = JSX.Element[] | JSX.Element;

interface IContainer {
    dark:boolean; 
    children:ChilderenType
}