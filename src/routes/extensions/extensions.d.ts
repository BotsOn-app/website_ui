export interface IChanges {
	changes_id: number;
	title: string;
	content: string;
	version: string;
}

export interface IBanner {
	banner_id: number;
	url: string;
	name: string;
}

export interface IAuthor {
	author_id: number;
	name: string;
	avatarUrl: string;
}

export interface IData {
	data_id: number;
	banner: IBanner;
	name: string;
	description: string;
	verified: boolean;
	changes: IChanges[];
}

export interface IExtensions {
	id: number;
	author: IAuthor;
	version: number;
	downloads: number;
	data: IData;
}
