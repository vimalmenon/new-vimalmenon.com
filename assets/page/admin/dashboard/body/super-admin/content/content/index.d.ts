import { SelectProps } from "@material-ui/core/Select";
import {CheckboxProps} from "@material-ui/core/Checkbox"

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

type OnValueUpdateType = (e:SelectProps|CheckboxProps|any, key:number, innerKey?:number) => void;
type UseInitDataType = () => {refresh:IVoidNoParamMethod, data:IContent[], onValueUpdate:OnValueUpdateType, onSave:IVoidNoParamMethod}

export interface IContentDataProps {
    data:IContentData[];
    parentKey:number;
    onValueUpdate:OnValueUpdateType;
    isJson:boolean;
}