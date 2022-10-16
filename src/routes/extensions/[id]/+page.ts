import type { Load } from "@sveltejs/kit";
import type { IExtensions } from "../extensions";
export const load: Load = async ({ data, fetch, params }) => {
	const res: any = await fetch(
		`http://localhost:8000/api/extensions/${params.id}`
	);
	const extensions: IExtensions = res.json();
	return {
		extensions,
	};
};
