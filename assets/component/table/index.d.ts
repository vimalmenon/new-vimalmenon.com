interface column {
    title:string; 
    field:string;
}

export interface TableProps {
    columns:column[];
    data:Object[];
    title:string;
    editable?:Object
}