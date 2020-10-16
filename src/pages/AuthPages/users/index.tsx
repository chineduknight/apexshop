import { convertRoutesToComponents } from "helpers";
import React from "react";
import { userRoutes } from "./routes";

const UserPages = () => <div>{convertRoutesToComponents(userRoutes)}</div>;

export default UserPages;
