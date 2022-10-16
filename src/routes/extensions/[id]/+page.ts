import { env } from "$env/dynamic/public";

export const load = async ({ data, fetch, params }) => {
	const res = await fetch(`${env.PUBLIC_API_URL}/extensions/${params.id}`);
	const extension = await res.json();

	return {
		extension: extension,
	};
};
