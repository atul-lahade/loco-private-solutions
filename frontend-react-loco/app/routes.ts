import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx", [
        route("/", "./components/HomeScreen.tsx"),
        route("/about", "./components/About.tsx"),
        route("/products", "./components/Products.tsx"),
        route("/services", "./components/Services.tsx"),
        route("/testimonials", "./components/Testimonials.tsx"),
        route("/contact", "./components/Contact.tsx"),
        route("/services/ayurvedic", "./components/Services/Ayurvedic.tsx"),
        route("/services/business", "./components/Services/Business.tsx"),
        route("/services/education", "./components/Services/Education.tsx"),
        route("/services/info-tech", "./components/Services/InfoTech.tsx"),
        route("/services/marketing", "./components/Services/MarketingResearch.tsx"),
        route("/services/supply-chain", "./components/Services/SupplyLogistic.tsx"),
    ])
] satisfies RouteConfig;
