declare module '*.png';
declare module '*.jpg';

interface IAction<T> {
    type:string;
    payload:T;
}