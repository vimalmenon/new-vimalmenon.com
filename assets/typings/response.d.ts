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
	socialMedias:ISocialMedia[]
}