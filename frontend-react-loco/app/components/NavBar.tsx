import LanguageSelector from "./LanguageSelector";
import Loco from "./Loco";
import { NavLink } from "react-router";
import { useState } from "react";
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

    return (
        <nav className="bg-black shadow-md fixed w-full top-0 z-50 mb-4">
            <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-24">
                <div className="flex justify-between h-20 md:gap-4 lg:gap-16">
                    <div className="flex-shrink-0 flex items-center md:px-8">
                        <Loco />
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <NavLink
                            to="/"
                            className={`${activeLink === t("navbar.home") ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick(t("navbar.home"))}
                        >
                            {t("navbar.home")}
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={`${activeLink === t("navbar.about") ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick(t("navbar.about"))}
                        >
                            {t("navbar.about")}
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={`${activeLink === t("navbar.services") ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick(t("navbar.services"))}
                        >
                            {t("navbar.services")}
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={`${activeLink === t("navbar.products") ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick(t("navbar.products"))}
                        >
                            {t("navbar.products")}
                        </NavLink>
                        <NavLink
                            to="/testimonials"
                            className={`${activeLink === t("navbar.testimonials") ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-widest transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick(t("navbar.testimonials"))}
                        >
                            {t("navbar.testimonials")}
                        </NavLink>
                        <NavLink
                            to="/contact"
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
                            to="/"
                            className={`block ${activeLink === 'Home' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Home')}
                        >
                            {t("navbar.home")}
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={`block ${activeLink === 'About' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('About')}
                        >
                            {t("navbar.about")}
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={`block ${activeLink === 'Services' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Services')}
                        >
                            {t("navbar.services")}
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={`block ${activeLink === 'Products' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Products')}
                        >
                            {t("navbar.products")}
                        </NavLink>
                        <NavLink
                            to="/testimonials"
                            className={`block ${activeLink === t("navbar.testimonials") ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg tracking-wider transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick(t("navbar.testimonials"))}
                        >
                            {t("navbar.testimonials")}
                        </NavLink>
                        <NavLink
                            to="/contact"
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
    );
}