import h, { GoldComponent } from "../../component";

export function Title({ title, children }: { title: string, children: string }) {
	return h('h1', {}, `This is a title: ${title} (${children})`);
}