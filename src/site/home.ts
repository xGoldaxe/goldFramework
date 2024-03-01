import h, { FunctionalComponent } from "../component";
import { Computed } from "./components/computed";
import { Title } from "./components/title";

const Home: FunctionalComponent<void> = async () => {
	const list = [
		1,2,3,4
	]

	return await h('html', { lang: "en" },
		await h('head', {},
			await h('title', {}, 'My First Web Server')),
		await h('body', {},
			await h(Title, { title: 'Hello, World!' }, "this is a child"),
			await h('p', {}, 'Home'),
			await h("a", { href: "/test" }, "Test"),
			await h("img", { src: "/goeland.jpg", alt: "Goeland" }),
			await h(Computed, {}),
			// await h("ul", {}, ...list.map((item) => h("li", {}, item))),
		));
}

export default Home;