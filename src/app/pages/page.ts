import h, { FunctionalComponent } from "../../component";
import { Computed } from "../components/computed";
import { Title } from "../components/title";

const Home: FunctionalComponent<void> = async () => {
	const list = [
		1,2,3,4
	]

	return h('html', { lang: "en" },
		h('head', {},
			h('title', {}, 'My First Web Server')),
		h('body', {},
			h(Title, { title: 'Hello, World!' }, "this is a child"),
			h('p', {}, 'Home'),
			h("a", { href: "/test" }, "Test"),
			h("img", { src: "/goeland.jpg", alt: "Goeland" }),
			h(Computed, {}),
			h(Computed, {}),
			h(Computed, {}),
			h('p', {}, 'Computed elements load concurrently'),
			h("ul", {}, ...list.map((item) => h("li", {}, item))),
		));
}

export default Home;