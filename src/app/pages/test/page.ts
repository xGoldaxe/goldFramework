import h, { FunctionalComponent } from "../../../component";

const Test: FunctionalComponent<void> = async () => {
	return h('html', { "lang": "en" },
		h('head', {},
			h('title', {}, 'My First Web Server')),
		h('body', {},
			h('h1', {}, 'Hello, World!'),
			h('p', {}, 'Test'),
			h("a", { href: "/" }, "Home"),
			h("a", { href: "/test/other" }, "Other"),
		));
}

export default Test;