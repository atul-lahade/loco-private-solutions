import downArrow from "../assets/icons/down-arrow.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const countries = [
    { code: "us", name: "English" },
    { code: "fr", name: "Français" },
    { code: "es", name: "Español" },
    { code: "de", name: "German" },
    { code: "pt", name: "Português" },
    { code: "ae", name: "Arabic" },
    { code: "ru", name: "Russian" },
    { code: "jp", name: "Japanese" },
    { code: "kr", name: "Korean" },
];

export default function LanguageSelector() {
    const { i18n } = useTranslation(['home']);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(countries[0]);

    const onClickLanguageChange = (country: { code: string; name: string }) => {
        setSelected(country);
        setIsOpen(false);
        i18n.changeLanguage(country.code);
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-2 py-1 border rounded-md shadow bg-white hover:bg-gray-100 cursor-pointer text-black"
            >
                <img
                    src={`https://flagcdn.com/w40/${selected.code}.png`}
                    alt={selected.name}
                    className="w-4 h-3 object-cover rounded"
                />
                <span className="text-xs md:text-sm">{selected.name}</span>
                <img
                    src={downArrow}
                    className={`w-3 h-3 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>

            {/* Dropdown Menu (Opens to Left) */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                    {countries.map((country) => (
                        <div
                            key={country.code}
                            onClick={() => onClickLanguageChange(country)}
                            className="flex items-center space-x-2 px-2 py-1 cursor-pointer hover:bg-gray-200 text-black"
                        >
                            <img
                                src={`https://flagcdn.com/w40/${country.code}.png`}
                                alt={country.name}
                                className="w-4 h-3 object-cover rounded"
                            />
                            <span className="text-xs md:text-sm">{country.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}