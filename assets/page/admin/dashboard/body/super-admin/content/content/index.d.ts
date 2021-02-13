export interface IContentData {
    id:number;
    active:boolean;
    data:string;
    lastUpdated:string;
    type:"full"|"short";
}


export interface IContent{
    id:number;
    isJson:boolean;
    name:string;
    title:string;
    contentData:IContentData[];
}