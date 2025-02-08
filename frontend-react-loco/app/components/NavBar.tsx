import Loco from "./Loco";
import { useState } from "react";


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
                        <a
                            href="/"
                            className={`${activeLink === 'HOME' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('HOME')}
                        >
                            Home
                        </a>
                        <a
                            href="/about-us"
                            className={`${activeLink === 'ABOUT US' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('ABOUT US')}
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className={`${activeLink === 'SERVICES' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('SERVICES')}
                        >
                            Services
                        </a>
                    </div>
                    <div className="flex-shrink-0 flex items-center md:ml-12 md:px-8 lg:ml-16 lg:pl-16">
                        <Loco />
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="/products"
                            className={`${activeLink === 'PRODUCTS' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('PRODUCTS')}
                        >
                            Products
                        </a>
                        <a
                            href="/testimonials"
                            className={`${activeLink === 'TESTIMONIALS' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('TESTIMONIALS')}
                        >
                            Testimonials
                        </a>
                        <a
                            href="/contact-us"
                            className={`${activeLink === 'CONTACT US' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('CONTACT US')}
                        >
                            Contact
                        </a>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-orange-400 focus:outline-none"
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
                        <a
                            href="/"
                            className={`block ${activeLink === 'HOME' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('HOME')}
                        >
                            Home
                        </a>
                        <a
                            href="/about-us"
                            className={`block ${activeLink === 'ABOUT US' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('ABOUT US')}
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className={`block ${activeLink === 'SERVICES' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('SERVICES')}
                        >
                            Services
                        </a>
                        <a
                            href="/products"
                            className={`block ${activeLink === 'PRODUCTS' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('PRODUCTS')}
                        >
                            Products
                        </a>
                        <a
                            href="/testimonials"
                            className={`block ${activeLink === 'TESTIMONIALS' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('TESTIMONIALS')}
                        >
                            Testimonials
                        </a>
                        <a
                            href="/contact-us"
                            className={`block ${activeLink === 'CONTACT US' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('CONTACT US')}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}