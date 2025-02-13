import Loco from "./Loco";
import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {
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
            <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-24">
                <div className="flex justify-between h-20">
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink
                            to="/"
                            className={`${activeLink === 'Home' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Home')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={`${activeLink === 'About' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('About')}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={`${activeLink === 'Services' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Services')}
                        >
                            Services
                        </NavLink>
                    </div>
                    <div className="flex-shrink-0 flex items-center md:ml-12 md:px-8 lg:ml-16 lg:pl-16">
                        <Loco />
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink
                            to="/products"
                            className={`${activeLink === 'Products' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Products')}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/testimonials"
                            className={`${activeLink === 'Testimonials' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Testimonials')}
                        >
                            Testimonials
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={`${activeLink === 'Contact' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Contact')}
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-white hover:text-orange-300 focus:outline-none"
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
                <div className="md:hidden bg-black">
                    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink
                            to="/"
                            className={`block ${activeLink === 'Home' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Home')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={`block ${activeLink === 'About' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('About')}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={`block ${activeLink === 'Services' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Services')}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/products"
                            className={`block ${activeLink === 'Products' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Products')}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/testimonials"
                            className={`block ${activeLink === 'Testimonials' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Testimonials')}
                        >
                            Testimonials
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={`block ${activeLink === 'Contact' ? 'text-orange-300' : 'text-white'
                                } hover:text-orange-300 text-lg transition delay-100 duration-300 ease-in-out hover:scale-110`}
                            onClick={() => handleLinkClick('Contact')}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}