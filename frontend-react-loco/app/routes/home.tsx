import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "LOCO Private Solutions" },
    { name: "Loco Private Solutions specializes in exporting high-quality onions, vegetables, and other fresh produce to international clients", content: "Welcome to LOCO Private Solutions" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}
