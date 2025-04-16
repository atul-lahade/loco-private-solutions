import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
