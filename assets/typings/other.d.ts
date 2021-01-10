declare module '*.png';
declare module '*.jpg';

interface IAction<T> {
    type:string;
    payload:T;
}

declare module "worker-loader!*" {
    class WebpackWorker extends Worker {
      constructor();
    }

    export default WebpackWorker;
}