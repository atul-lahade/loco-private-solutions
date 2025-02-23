import { NavLink } from 'react-router';
import ayurvedImg from '../assets/images/services/ayurved-consultancy.webp';
import businessImg from '../assets/images/services/business-consultancy.webp';
import educationImg from '../assets/images/services/education.webp';
import itImg from '../assets/images/services/it-consulting.webp';
import marketImg from '../assets/images/services/market-research.webp';
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation(['home']);
    return (
        <div className="flex flex-col min-h-screen font-inter mt-12 md:mt-16 lg:mt-20">
            <div className="flex-grow flex relative justify-center items-center">
                <div className="container pb-24 sm:pb-24 lg:pb-36">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 m-16 gap-x-8 gap-40 md:gap-y-48 lg:gap-y-40">
                        <NavLink to="/services/marketing">
                            <div className="relative cursor-pointer group">
                                <div className="overflow-hidden rounded-2xl">
                                    <img src={marketImg} alt="" className="group-hover:scale-105 transition duration-300 ease-in-out" />
                                </div>
                                <div className="absolute -bottom-32 md:-bottom-40 lg:-bottom-32 left-2/4 -translate-x-1/2">
                                    <div className="relative">
                                        <div className="group-hover:bg-[#799AA3] text-center w-72 lg:w-96 px-4 lg:px-5 py-7 lg:py-10 group-hover:text-white text-black bg-white shadow-xl rounded-b-2xl transition duration-300 ease-in-out">
                                            <div className="relative inline-block">
                                                <h2 className="text-xl md:text-2xl font-bold before:absolute before:w-4 before:h-0.5 group-hover:before:w-full before:transition-all 
                                            before:bg-white before:bottom-0 before:duration-500 before:ease-in-out inline-block">{t("services.service_1.heading")}
                                                </h2>
                                            </div>
                                            <p className="text-sm md:text-base pt-5">{t("services.service_1.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/services/business">
                            <div className="relative cursor-pointer group">
                                <div className="overflow-hidden rounded-2xl">
                                    <img src={businessImg} alt="" className="group-hover:scale-105 transition duration-300 ease-in-out" />
                                </div>
                                <div className="absolute -bottom-32 md:-bottom-40 lg:-bottom-32 left-2/4 -translate-x-1/2">
                                    <div className="relative">
                                        <div className="group-hover:bg-[#799AA3] text-center w-72 lg:w-96 px-4 lg:px-5 py-7 lg:py-10 group-hover:text-white text-black bg-white shadow-xl rounded-b-2xl transition duration-300 ease-in-out">
                                            <div className="relative inline-block">
                                                <h2 className="text-xl md:text-2xl font-bold before:absolute before:w-4 before:h-0.5 group-hover:before:w-full before:transition-all before:bg-white before:bottom-0 before:duration-500 before:ease-in-out inline-block">{t("services.service_2.heading")}
                                                </h2>
                                            </div>
                                            <p className="text-sm md:text-base pt-5">{t("services.service_2.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/services/ayurvedic">
                            <div className="relative cursor-pointer group">
                                <div className="overflow-hidden rounded-2xl">
                                    <img src={ayurvedImg} alt="" className="group-hover:scale-105 transition duration-300 ease-in-out" />
                                </div>
                                <div className="absolute -bottom-32 md:-bottom-40 lg:-bottom-32 left-2/4 -translate-x-1/2">
                                    <div className="relative">
                                        <div className="group-hover:bg-[#799AA3] text-center w-72 lg:w-96 px-4 lg:px-5 py-7 lg:py-10 group-hover:text-white text-black bg-white shadow-xl rounded-b-2xl transition duration-300 ease-in-out">
                                            <div className="relative inline-block">
                                                <h2 className="text-xl md:text-2xl font-bold before:absolute before:w-4 before:h-0.5 group-hover:before:w-full before:transition-all before:bg-white before:bottom-0 before:duration-500 before:ease-in-out inline-block">{t("services.service_3.heading")}</h2>
                                            </div>
                                            <p className="text-sm md:text-base pt-5">{t("services.service_3.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/services/education">
                            <div className="relative cursor-pointer group">
                                <div className="overflow-hidden rounded-2xl">
                                    <img src={educationImg} alt="" className="group-hover:scale-105 transition duration-300 ease-in-out" />
                                </div>
                                <div className="absolute -bottom-32 md:-bottom-40 lg:-bottom-32 left-2/4 -translate-x-1/2">
                                    <div className="relative">
                                        <div className="group-hover:bg-[#799AA3] text-center w-72 lg:w-96 px-4 lg:px-5 py-7 lg:py-10 group-hover:text-white text-black bg-white shadow-xl rounded-b-2xl transition duration-300 ease-in-out">
                                            <div className="relative inline-block">
                                                <h2 className="text-xl md:text-2xl font-bold before:absolute before:w-4 before:h-0.5 group-hover:before:w-full before:transition-all before:bg-white before:bottom-0 before:duration-500 before:ease-in-out inline-block">{t("services.service_4.heading")}</h2>
                                            </div>
                                            <p className="text-sm md:text-base pt-5">{t("services.service_4.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/services/info-tech">
                            <div className="relative cursor-pointer group">
                                <div className="overflow-hidden rounded-2xl">
                                    <img src={itImg} alt="" className="group-hover:scale-105 transition duration-300 ease-in-out" />
                                </div>
                                <div className="absolute -bottom-32 md:-bottom-40 lg:-bottom-32 left-2/4 -translate-x-1/2">
                                    <div className="relative">
                                        <div className="group-hover:bg-[#799AA3] text-center w-72 lg:w-96 px-4 lg:px-5 py-7 lg:py-10 group-hover:text-white text-black bg-white shadow-xl rounded-b-2xl transition duration-300 ease-in-out">
                                            <div className="relative inline-block">
                                                <h2 className="text-xl md:text-2xl font-bold before:absolute before:w-4 before:h-0.5 group-hover:before:w-full before:transition-all before:bg-white before:bottom-0 before:duration-500 before:ease-in-out inline-block">{t("services.service_5.heading")}</h2>
                                            </div>
                                            <p className="text-sm md:text-base pt-5">{t("services.service_5.desc")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}