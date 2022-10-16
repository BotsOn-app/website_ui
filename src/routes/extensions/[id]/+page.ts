export const load = async ({ data, fetch, params }) => {
	const fetchExtension = async (id: string) => {
		const res = await fetch(`http://localhost:8000/api/extensions/${id}`);
		const extension = res.json();
		return extension;
	};
	return {
		extension: fetchExtension(params.id),
	};
};
