import { NavLink } from "react-router";
import Loco from "./Loco";


export default function NavBar() {
    return (
       <div className="top-0 left-0 right-0 bg-black shadow-md z-100 h-24 px-6 py-4 sticky">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/5 justify-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-bold tracking-wide" : "cursor-pointer tracking-wide"}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-bold tracking-wide" : "cursor-pointer tracking-wide"}
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-bold tracking-wide" : "cursor-pointer tracking-wide"}
                    >
                        SERVICES
                    </NavLink>
                </div>
                <Loco />
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/5 justify-center mt-4 md:mt-0"> 
                    <NavLink
                        to="/products"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-bold tracking-wide" : "cursor-pointer tracking-wide"}
                    >
                        PRODUCTS
                    </NavLink>
                    <NavLink
                        to="/testimonials"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-bold tracking-wide" : "cursor-pointer tracking-wide"}
                    >
                        TESTIMONIALS
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => isActive ? "cursor-pointer text-orange-400 font-bold tracking-wide" : "cursor-pointer tracking-wide"}
                    >
                        CONTACT US
                    </NavLink>
                </div>
            </div>
        </div>
    );
}