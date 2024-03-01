import goldServer from "./server";
import { IS_DEV } from "./utils";

if (IS_DEV()) {
	goldServer.listen(7991);
}
