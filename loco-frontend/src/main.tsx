import "./assets/css/index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./components/About";
import Ayurvedic from "./components/Services/Ayurvedic";
import Business from "./components/Services/Business";
import Contact from "./components/Contact";
import Education from "./components/Services/Education";
import HomeScreen from "./components/HomeScreen";
import { I18nextProvider } from "react-i18next";
import InfoTech from "./components/Services/InfoTech";
import MarketingResearch from "./components/Services/MarketingResearch";
import Products from "./components/Products";
import React from "react";
import RootLayout from "./RootLayout";
import Services from "./components/Services";
import SupplyLogistic from "./components/Services/SupplyLogistic";
import Testimonials from "./components/Testimonials";
import { createRoot } from "react-dom/client";
import i18next from "./i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "services", element: <Services /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
      { path: "services/ayurvedic", element: <Ayurvedic /> },
      { path: "services/business", element: <Business /> },
      { path: "services/education", element: <Education /> },
      { path: "services/info-tech", element: <InfoTech /> },
      { path: "services/marketing", element: <MarketingResearch /> },
      { path: "services/supply-chain", element: <SupplyLogistic /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
