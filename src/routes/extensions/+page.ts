// @ts-ignore
export const load = async ({ data, fetch }) => {
	const res = await fetch("http://localhost:8000/api/extensions");
	const extensions = res.json();
	return {
		extensions,
	};
};
