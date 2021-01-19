export interface ICredentials {
    username:string;
    password:string;
}

export type onFormSaveType = (data:ICredentials) => void;