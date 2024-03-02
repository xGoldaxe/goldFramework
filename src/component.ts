const GOLD_ELEMENT_SYMBOL$$ = Symbol('GOLD_ELEMENT_SYMBOL$$');

export interface GoldComponent {
	$$symbol: Symbol,
	tag: string, // if tag is null => it's a functional component
	props: { [key: string]: string },
	children: (GoldComponent | string | number)[],
}

export type FunctionalComponent<T = any> = (props: T) => Promise<GoldComponent> | GoldComponent;

export default async function h<T extends { [key: string]: string }>(tag: string | FunctionalComponent, props: T, ...children: (any)[]) {
	if (typeof tag === 'function') {
		return tag({ ...props, children: children });
	};
	return {
		$$symbol: GOLD_ELEMENT_SYMBOL$$,
		tag: tag,
		props,
		children,
	}
}