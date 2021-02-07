interface IResponse<T> {
	code:number;
	message:string;
	data:T;
	flush:boolean;
}

interface IReadWrite {
    read:boolean;
    write:boolean;
}
interface IApiResponse {
	socialMedias:ISocialMedia[];
}
interface IContent {
	data:string;
	title:string;
	name:string;
}

interface IReleaseResponse {
	versionNo:string,
	buildDate:string,
	details:string[]
}

interface IContentResponse {	
	data: string;
	name: string;
	title:string;
}