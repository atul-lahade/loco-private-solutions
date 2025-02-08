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
                            className={`${activeLink === 'Home' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Home')}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`${activeLink === 'About' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('About')}
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className={`${activeLink === 'Services' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Services')}
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
                            className={`${activeLink === 'Products' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Products')}
                        >
                            Products
                        </a>
                        <a
                            href="/testimonials"
                            className={`${activeLink === 'Testimonials' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Testimonials')}
                        >
                            Testimonials
                        </a>
                        <a
                            href="/contact"
                            className={`${activeLink === 'Contact' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Contact')}
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
                            className={`block ${activeLink === 'Home' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Home')}
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className={`block ${activeLink === 'About' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('About')}
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className={`block ${activeLink === 'Services' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Services')}
                        >
                            Services
                        </a>
                        <a
                            href="/products"
                            className={`block ${activeLink === 'Products' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Products')}
                        >
                            Products
                        </a>
                        <a
                            href="/testimonials"
                            className={`block ${activeLink === 'Testimonials' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Testimonials')}
                        >
                            Testimonials
                        </a>
                        <a
                            href="/contact"
                            className={`block ${activeLink === 'Contact' ? 'text-orange-400' : 'text-white'
                                } hover:text-orange-400 text-lg tracking-wider`}
                            onClick={() => handleLinkClick('Contact')}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}