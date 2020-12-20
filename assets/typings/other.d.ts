declare module '*.png';
declare module '*.jpg';

type EnvType= "PROD"|"DEV"|"TEST";

interface IAction<T> {
    type:string;
    payload:T;
}