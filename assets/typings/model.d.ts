interface INavigation {
    name: string;
	url: string;
	title: string;
    inPage:boolean;
    navigations?:INavigation[]
}
interface IModel {
}

interface IApi {
    name: string;
    method : string;
    url : string;
    body?: string;
}