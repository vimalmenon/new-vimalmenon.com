interface INavigation {
    name: string;
	url: string;
	title: string;
	inPage:boolean;
}
interface IModel {
}

interface IApi {
    name: string;
    method : string;
    url : string;
    body?: string;
}