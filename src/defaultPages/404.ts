import h, { FunctionalComponent } from "../component";

const Page404: FunctionalComponent<void> = async () => {
	return h('html', {},
		await h('head', {},
			await h('title', {}, 'Error 404')),
		await h('body', {},
			await h('h1', {}, 'Error 404 - ressource not found'),
		));
}

export default Page404;