import h from "../../component";

function fakeFetch() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('ok');
		}, 1000);
	});
}

export async function Computed() {
	const computed = await fakeFetch();

	return h('p', { style: "color: 'red'" }, `Finnally computed`);
}