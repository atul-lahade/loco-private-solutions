import { NavLink, Outlet } from "react-router";


export default function NavBar() {
    return (
        <><div className="fixed top-0 left-0 right-0 bg-black shadow-md z-100 h-20 px-6 py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/3">
                    <NavLink
                        to="/home"
                        className={({ isActive }) => isActive ? "cursor-pointer text-blue-500 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/About Us"
                        className={({ isActive }) => isActive ? "cursor-pointer text-blue-500 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        ABOUT US
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => isActive ? "cursor-pointer text-blue-500 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        PRODUCTS
                    </NavLink>
                </div>
                <div className="flex-grow text-center w-full md:w-1/3 mt-4 md:mt-0">
                    <span className="text-[24px] md:text-[38px] font-indigo-outline text-white">
                        LOCO
                    </span>
                </div>
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/3 justify-end mt-4 md:mt-0">
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? "cursor-pointer text-blue-500 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        SERVICES
                    </NavLink>
                    <NavLink
                        to="/testimonials"
                        className={({ isActive }) => isActive ? "cursor-pointer text-blue-500 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        TESTIMONIALS
                    </NavLink>
                    <NavLink
                        to="/contact-us"
                        className={({ isActive }) => isActive ? "cursor-pointer text-blue-500 font-sans font-bold" : "cursor-pointer font-sans"}
                    >
                        CONTACT US
                    </NavLink>
                </div>
            </div>
        </div><div className="pt-24 md:pt-16">
                <Outlet />
            </div></>
    );
}