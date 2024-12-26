import { NavLink } from "react-router";
import Loco from "./Loco";


export default function NavBar() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-black shadow-md z-100 h-20 px-6 py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/5">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        PRODUCTS
                    </NavLink>
                </div>
                <Loco />
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/5 justify-end mt-4 md:mt-0">
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        SERVICES
                    </NavLink>
                    <NavLink
                        to="/testimonials"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        TESTIMONIALS
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        CONTACT US
                    </NavLink>
                </div>
            </div>
        </div>
    );
}