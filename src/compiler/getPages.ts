const fs = require("fs");
const path = require("path");

export function findPagesPaths(directory: string): string[] {
	let result: string[] = [];
	// Read all files and directories in the current directory
	fs.readdirSync(directory).forEach((file: string) => {
			const filePath = path.join(directory, file);
			// Check if it's a directory
			if (fs.statSync(filePath).isDirectory()) {
					// Recursively call findPages for subdirectories
				result = [...result, ...findPagesPaths(filePath)];
			} else {
					// Check if it's a file named "page.ts"
					if (file === 'page.ts') {
						result.push(filePath);
					}
			}
	});
	return result;
}