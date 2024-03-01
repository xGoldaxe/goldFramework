import { FunctionalComponent } from "./component";
import getPageContent from "./getPageContent";

export default async function buildHtml(component: FunctionalComponent): Promise<string | undefined> {
	const pageContent = await getPageContent(component);

	return `
		<!DOCTYPE html>
		${pageContent}
	`;
}