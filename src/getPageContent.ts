import { GOLD_INSTANCE } from "./buildInstance";
import { FunctionalComponent, GoldComponent } from "./component";
const path = require("path");

export default function getPageContent(pageComponent: FunctionalComponent<void>) {
	return generatePage(pageComponent);
}

function arePathsIdentical(path1: string, path2: string) {
	// Normalize paths by removing leading and trailing slashes
	const normalizedPath1 = path1.replace(/^\/+|\/+$/g, '');
	const normalizedPath2 = path2.replace(/^\/+|\/+$/g, '');

	return normalizedPath1 === normalizedPath2;
}

export function getPageComponent(url: string) {
	console.log(path.normalize(url), GOLD_INSTANCE)
	return GOLD_INSTANCE?.find(route => arePathsIdentical(route.path, url))?.component || null;
}

async function generatePage(pageComponent: FunctionalComponent<void>) {
	const pageElement = pageComponent();
	const pageHtml = renderTree(pageElement);
	return pageHtml;
}

async function renderTree(pageElement: GoldComponent | string | number | Promise<GoldComponent>): Promise<string> {
	const element = await pageElement;
	if (typeof element === 'string' || typeof element === 'number') {
		return `${element}`;
	}
	const childContentArray = [];
	for (const child of element.children) {
		childContentArray.push(await renderTree(child));
	}
	const childContent = childContentArray.join('');
	if (element.tag === null) {
		return childContent;
	}
	return `<${element.tag}${renderAttrs(element.props)}>${childContent}</${element.tag}>`;
}

function renderAttrs(props: { [key: string]: string }) {
	let attributesStr = "";
	for (const [key, value] of Object.entries(props)) {
		attributesStr += ` ${key}="${value}"`;
	}
	return attributesStr;
}