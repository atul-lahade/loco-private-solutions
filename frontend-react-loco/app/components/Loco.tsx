import { NavLink } from "react-router";
import { homeRoute } from "~/utils";

export default function Loco() {
    return (
        <div className="flex-grow text-center w-full md:w-1/5 text-6xl font-bold text-transparent stroke-white stroke-2 tracking-widest">
            <div>
                <NavLink
                    to={homeRoute}
                    className="cursor-pointer"
                >
                    <h3 className="text-[32px] md:text-[52px] text-transparent tracking-[6px] leading-[1.2] stroke-white stroke-2 hover:text-gray-300 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                        LOCO
                    </h3>
                </NavLink>
            </div>
        </div>
    );
}