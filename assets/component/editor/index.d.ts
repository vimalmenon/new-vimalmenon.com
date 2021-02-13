export interface IEditorProps {
    language?:"json"|"javascript"|"markdown",
    theme?:"dark"|"light",
    name?:string;
    value:string;
    onChange?:(value:string)=>void;
    className:string;
}

export type ThemeSelectorType = (value:string) =>string;