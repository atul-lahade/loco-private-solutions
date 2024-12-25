import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "App.tsx", [
        route("name-gen", "routes/name-gen.tsx"),
    ]),

] satisfies RouteConfig;
