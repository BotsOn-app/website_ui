import { env } from "$env/dynamic/public";

export const load = async ({ data, fetch }) => {
	const res = await fetch(`${env.PUBLIC_API_URL}/extensions`);
	const extensions = await res.json();

	return {
		extensions: extensions,
	};
};
