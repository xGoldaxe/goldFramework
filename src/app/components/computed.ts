import h from "../../component";

function fakeFetch() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('ok');
		}, 0);
	});
}

export async function Computed() {
	const computed = await fakeFetch();

	return h('p', { style: "color: 'red'" }, `Finnally computed`);
}