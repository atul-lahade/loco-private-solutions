import { NavLink } from "react-router";

export default function Loco() {
    return (
        <div className="flex-grow text-center w-full md:w-1/5 mt-0 mb-0 text-6xl font-bold text-transparent stroke-white stroke-2 tracking-widest">
            <div>
                <NavLink
                    to="/"
                    className="cursor-pointer"
                >
                    <h3 className="text-[24px] md:text-[44px] font-indigo-outline text-transparent tracking-[6px] leading-[1.2] font-['Indigo_Outline',_arial,_sans-serif] stroke-white stroke-2">
                        LOCO
                    </h3>
                </NavLink>
            </div>
        </div>
    );
}