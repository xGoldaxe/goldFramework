import { ServerResponse } from "http";
import buildHtml from "./buildHtml";
import render from "./buildInstance";
import { FunctionalComponent } from "./component";
import Page404 from "./defaultPages/404";
import { getPageComponent } from "./getPageContent";
import Home from "./site/home";
import Test from "./site/test";

var http = require('http');
const statik = require('node-static');

const fileServer = new statik.Server('src/public', { cache: 0 });

//create a server object:
const goldServer = http.createServer(function (req: Request, res: ServerResponse) {
	const goldServer = render([
		{ path: "/", component: Home },
		{ path: "/test", component: Test },
	]);
	const pageComponent = getPageComponent(req.url);
	if (pageComponent) {
		return servePage(res, pageComponent);
	}
	else {
		fileServer.serve(req, res, function (e: any) {
			if (e && (e.status === 404)) { // If the file wasn't found
				return servePage(res, Page404);
			}
		});
	}
});

async function servePage(res: ServerResponse, pageComponent: FunctionalComponent) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(await buildHtml(pageComponent)); //write a response to the client
	res.end(); //end the response
}

export default goldServer;