import { FunctionalComponent } from "./component";

interface Route {
	path: string;
	component: FunctionalComponent<void>;
}

export let GOLD_INSTANCE: Route[] | null = null;

export default function render(renderRoutes: Route[]) {
	if (GOLD_INSTANCE) {
		console.warn("An instance of GOLD is already running. Please stop the current instance before starting a new one.");
		return;
	}
	GOLD_INSTANCE = renderRoutes;
	return GOLD_INSTANCE;
}