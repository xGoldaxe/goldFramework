import { ServerResponse } from "http";
import buildHtml from "./buildHtml";
import render, { Route } from "./buildInstance";
import { FunctionalComponent } from "./component";
import Page404 from "./defaultPages/404";
import { getPageComponent } from "./getPageContent";
import { findPagesPaths } from "./compiler/getPages";

var http = require('http');
var fs = require('fs');
var path = require('path');
const statik = require('node-static');

const data = fs.readFileSync('./goldConfig.json');
const config = JSON.parse(data);
const fileServer = new statik.Server(`${process.env.PWD}${config.rootDir}/public`);
const pagesSrc = `${process.env.PWD}${config.rootDir}/pages`;
const pagesFiles = findPagesPaths(pagesSrc);

const pages: Route[] = pagesFiles.map((filePath: string) => {
	return ({ path: path.dirname(filePath).substring(pagesSrc.length), component: require(filePath).default });
});

//create a server object:
const goldServer = http.createServer(function (req: Request, res: ServerResponse) {
	render(pages);
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