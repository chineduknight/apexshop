import { convertRoutesToComponents } from "helpers/pagesParser";
import routes from "./routes";

const Pages = (): any => convertRoutesToComponents(routes);

export default Pages;
