import h, { FunctionalComponent } from "../component";

const Test: FunctionalComponent<void> = async () => {
	return h('html', { "lang": "en" },
		await h('head', {},
			await h('title', {}, 'My First Web Server')),
		await h('body', {},
			await h('h1', {}, 'Hello, World!'),
			await h('p', {}, 'Test'),
			await h("a", { href: "/" }, "Home"),
		));
}

export default Test;