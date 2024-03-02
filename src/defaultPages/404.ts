import h, { FunctionalComponent } from "../component";

const Page404 = () => {
	return h('html', {},
		h('head', {},
			h('title', {}, 'Error 404')),
		h('body', {},
			h('h1', {}, 'Error 404 - ressource not found'),
		));
}

export default Page404;