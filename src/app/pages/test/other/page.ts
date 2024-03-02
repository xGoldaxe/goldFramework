import h, { FunctionalComponent } from "../../../../component";

const Test: FunctionalComponent<void> = async () => {
	return h('html', { "lang": "en" },
		h('head', {},
			h('title', {}, 'My First Web Server')),
		h('body', {},
			h('h1', {}, 'Other page'),
			h('p', {}, 'Test'),
		));
}

export default Test;