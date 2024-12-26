import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx", [
        route("/about-us", "./components/AboutUs.tsx"),
        route("/products", "./components/Products.tsx"),
        route("/services", "./components/Services.tsx"),
        route("/testimonials", "./components/Testimonials.tsx"),
        route("/contact-us", "./components/ContactUs.tsx"),
    ])
] satisfies RouteConfig;
