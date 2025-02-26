import { aboutRoute, ayurvedicRoute, businessRoute, contactRoute, educationRoute, homeRoute, infoTechRoute, marketingRoute, productsRoute, servicesRoute, supplyChainRoute, testimonialsRoute } from "~/utils";
import { useEffect, useState } from "react";

import LanguageSelector from "./LanguageSelector";
import Loco from "./Loco";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function NavBar() {
    const { t } = useTranslation(['home']);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    };

    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleMouseEnter = (event: Event) => {
            (event.currentTarget as HTMLElement).setAttribute('open', '');
        };

        const handleMouseLeave = (event: Event) => {
            (event.currentTarget as HTMLElement).removeAttribute('open');
        };

        const detailsElements = document.querySelectorAll('details');
        detailsElements.forEach(details => {
            details.addEventListener('mouseenter', handleMouseEnter);
            details.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            detailsElements.forEach(details => {
                details.removeEventListener('mouseenter', handleMouseEnter);
                details.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <nav className="bg-black shadow-md fixed w-full top-0 z-50 mb-4">
                <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-24">
                    <div className="flex justify-between h-20 md:gap-4 lg:gap-16">
                        <div className="flex-shrink-0 flex items-center md:px-8" onClick={() => handleLinkClick(t("navbar.home"))}>
                            <Loco />
                        </div>
                        <div className="hidden lg:flex items-center space-x-4">
                            <NavLink
                                to={homeRoute}
                                className={`${activeLink === t("navbar.home") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.home"))}
                            >
                                {t("navbar.home")}
                            </NavLink>
                            <NavLink
                                to={aboutRoute}
                                className={`${activeLink === t("navbar.about") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.about"))}
                            >
                                {t("navbar.about")}
                            </NavLink>

                            <details className="group relative">
                                <summary className="relative flex items-center cursor-pointer list-none appearance-none [&::-webkit-details-marker]:hidden">
                                    <NavLink
                                        to={servicesRoute}
                                        className={`${activeLink === t("navbar.services") ? 'text-orange-300' : 'text-white'
                                            } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                        onClick={() => handleLinkClick(t("navbar.services"))}
                                    >
                                        {t("navbar.services")}

                                    </NavLink>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-1 w-3 h-3 text-white transition-transform duration-300 group-open:rotate-180"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                    </svg>
                                </summary>
                                <ul id="menu" className="absolute left-0 w-40 bg-white shadow-lg opacity-0 invisible group-open:opacity-100 group-open:visible transition duration-300 space-y-2 rounded-xl">
                                    <li>
                                        <NavLink
                                            to={marketingRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer hover:rounded-t-xl">
                                            {t("services.service_1.heading")}
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={supplyChainRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer">
                                            {t("services.service_2.heading")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={infoTechRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer">
                                            {t("services.service_3.heading")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={businessRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer">
                                            {t("services.service_4.heading")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ayurvedicRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer">
                                            {t("services.service_5.heading")}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={educationRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-gray-900 hover:bg-gray-200 hover:cursor-pointer hover:rounded-b-xl">
                                            {t("services.service_6.heading")}</NavLink>
                                    </li>
                                </ul>
                            </details>
                            <NavLink
                                to={productsRoute}
                                className={`${activeLink === t("navbar.products") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.products"))}
                            >
                                {t("navbar.products")}
                            </NavLink>
                            <NavLink
                                to={testimonialsRoute}
                                className={`${activeLink === t("navbar.testimonials") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.testimonials"))}
                            >
                                {t("navbar.testimonials")}
                            </NavLink>
                            <NavLink
                                to={contactRoute}
                                className={`${activeLink === t("navbar.contact") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.contact"))}
                            >
                                {t("navbar.contact")}
                            </NavLink>
                        </div>
                        <div className="flex flex-row items-center justify-end space-x-4 ml-auto">
                            <LanguageSelector />
                        </div>
                        <div className="flex items-center lg:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="text-white hover:text-orange-300 focus:outline-none ml-3"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="lg:hidden bg-black">
                        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavLink
                                to={homeRoute}
                                className={`block ${activeLink === 'Home' ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick('Home')}
                            >
                                {t("navbar.home")}
                            </NavLink>
                            <NavLink
                                to={aboutRoute}
                                className={`block ${activeLink === 'About' ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick('About')}
                            >
                                {t("navbar.about")}
                            </NavLink>
                            <details className="group">
                                <summary className="flex items-center gap-3 font-medium marker:content-none hover:cursor-pointer">
                                    <NavLink
                                        to={servicesRoute}
                                        className={`${activeLink === t("navbar.services") ? 'text-orange-300' : 'text-white'
                                            } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                        onClick={() => handleLinkClick(t("navbar.services"))}
                                    >
                                        {t("navbar.services")}

                                    </NavLink>
                                    <svg className="w-5 h-5 text-white transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                        </path>
                                    </svg>
                                </summary>
                                <ul id="menu" className="flex flex-col gap-2 pl-2 mt-1">
                                    <li className="flex">
                                        <NavLink
                                            to={marketingRoute}
                                            className="block px-4 py-2 text-base tracking-wider  text-white hover:cursor-pointer hover:rounded-t-xl"
                                            onClick={() => handleLinkClick(t("services.service_1.heading"))}>
                                            {t("services.service_1.heading")}
                                        </NavLink>
                                    </li>
                                    <li className="flex">
                                        <NavLink to={supplyChainRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-white hover:bg-gray-200 hover:cursor-pointer"
                                            onClick={() => handleLinkClick(t("services.service_2.heading"))}>
                                            {t("services.service_2.heading")}</NavLink>
                                    </li>
                                    <li className="flex gap-2">
                                        <NavLink to={infoTechRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-white hover:bg-gray-200 hover:cursor-pointer"
                                            onClick={() => handleLinkClick(t("services.service_3.heading"))}>
                                            {t("services.service_3.heading")}</NavLink>
                                    </li>
                                    <li className="flex gap-2">
                                        <NavLink to={businessRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-white hover:bg-gray-200 hover:cursor-pointer"
                                            onClick={() => handleLinkClick(t("services.service_4.heading"))}>
                                            {t("services.service_4.heading")}</NavLink>
                                    </li>
                                    <li className="flex gap-2">
                                        <NavLink to={ayurvedicRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-white hover:bg-gray-200 hover:cursor-pointer"
                                            onClick={() => handleLinkClick(t("services.service_5.heading"))}>
                                            {t("services.service_5.heading")}</NavLink>
                                    </li>
                                    <li className="flex gap-2">
                                        <NavLink to={educationRoute}
                                            className="block px-4 py-2 text-base tracking-wider text-white hover:bg-gray-200 hover:cursor-pointer hover:rounded-b-xl"
                                            onClick={() => handleLinkClick(t("services.service_6.heading"))}>
                                            {t("services.service_6.heading")}</NavLink>
                                    </li>
                                </ul>
                            </details>
                            <NavLink
                                to={productsRoute}
                                className={`block ${activeLink === 'Products' ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick('Products')}
                            >
                                {t("navbar.products")}
                            </NavLink>
                            <NavLink
                                to={testimonialsRoute}
                                className={`block ${activeLink === t("navbar.testimonials") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.testimonials"))}
                            >
                                {t("navbar.testimonials")}
                            </NavLink>
                            <NavLink
                                to={contactRoute}
                                className={`block ${activeLink === t("navbar.contact") ? 'text-orange-300' : 'text-white'
                                    } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                                onClick={() => handleLinkClick(t("navbar.contact"))}
                            >
                                {t("navbar.contact")}
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
            <button
                type="button"
                onClick={scrollToTop}
                className={`fixed bottom-5 end-5 z-50 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg ${isVisible ? "block" : "hidden"
                    }`}
            >
                <span className="[&>svg]:w-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                        />
                    </svg>
                </span>
            </button>
        </>
    );
}