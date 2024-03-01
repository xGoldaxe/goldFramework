import { GOLD_INSTANCE } from "./buildInstance";
import { FunctionalComponent, GoldComponent } from "./component";

export default function getPageContent(pageComponen: FunctionalComponent<void>) {
	return generatePage(pageComponen);
}

export function getPageComponent(url: string) {
	return GOLD_INSTANCE?.find(route => route.path === url)?.component || null;
}

async function generatePage(pageComponent: FunctionalComponent<void>) {
	const pageElement = await pageComponent();
	const pageHtml = renderTree(pageElement);
	return pageHtml;
}

function renderTree(pageElement: GoldComponent | string | number): string {
	if (typeof pageElement === 'string' || typeof pageElement === 'number') {
		return `${pageElement}`;
	}
	const childContent = pageElement.children.map(renderTree).join('');
	if (pageElement.tag === null) {
		return childContent;
	}
	return `<${pageElement.tag}${renderAttrs(pageElement.props)}>${childContent}</${pageElement.tag}>`;
}

function renderAttrs(props: { [key: string]: string }) {
	let attributesStr = "";
	for (const [key, value] of Object.entries(props)) {
		attributesStr += ` ${key}="${value}"`;
	}
	return attributesStr;
}