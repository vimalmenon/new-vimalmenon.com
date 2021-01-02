type IVoidNoParamMethod = ()=>void;
type IVoidOneParamMethod<T> = (value:T)=>void;

type IReturnNoParamMethod<K> = ()=>K;
type IReturnOneParamMethod<T, K> = (value:T)=>K;

type IBlankMethod = ()=>{};

interface IEmptyObject {}