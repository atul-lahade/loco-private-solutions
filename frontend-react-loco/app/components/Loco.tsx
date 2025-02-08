import { NavLink } from "react-router";

export default function Loco() {
    return (
        <div className="flex-grow text-center w-full md:w-1/5 text-6xl font-bold text-transparent stroke-white stroke-2 tracking-widest">
            <div>
                <NavLink
                    to="/"
                    className="cursor-pointer"
                >
                    <h3 className="text-[32px] md:text-[52px] text-transparent tracking-[6px] leading-[1.2] stroke-white stroke-2">
                        LOCO
                    </h3>
                </NavLink>
            </div>
        </div>
    );
}