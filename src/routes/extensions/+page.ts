export const load = async ({ data, fetch }) => {
	const fetchExtensions = async () => {
		const res = await fetch("http://localhost:8000/api/extensions");
		const extensions = res.json();
		return extensions;
	};
	return {
		extensions: fetchExtensions,
	};
};
