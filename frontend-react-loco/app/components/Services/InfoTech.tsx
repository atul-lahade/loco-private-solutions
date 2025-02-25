import { faChartColumn, faPlug, faShield, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { AiOutlineDotNet } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoTech() {
    return (
        <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16 mt-20 md:mt-16 sm:mt-12 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
                        Smart IT Solutions for Seamless Global Trade
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
                        Boost your export business with tailored IT solutions, from automation and e-commerce platforms to AI-driven insights and cybersecurity. Optimize operations, enhance efficiency, and scale globally with our expert tech services.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                            <FaReact className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">React Web Developement</h3>
                        <p className="mt-5 text-base text-gray-600">We create dynamic, scalable, and high-performance ReactJS solutions with innovative UIs and seamless experiences to drive your business growth. Let’s craft something amazing together!</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                            <AiOutlineDotNet className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">.NET Web Developement</h3>
                        <p className="mt-5 text-base text-gray-600">Need an enterprise-grade app? Our expert .NET developers build scalable, user-centric solutions to power your business. Elevate operations with cutting-edge .NET technology! Let’s innovate together.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faShoppingCart} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">E-commerce Tech</h3>
                        <p className="mt-5 text-base text-gray-600">Looking to launch or revamp your eCommerce platform? We deliver scalable, high-performance solutions at the best rates. Hire our certified developers to build superior websites and apps that drive success!</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faPlug} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">API Integration</h3>
                        <p className="mt-5 text-base text-gray-600">Enhance your apps with Google APIs, Payment Gateways, and Social Media integrations for smooth connectivity, secure transactions, and advanced functionality. Unlock the full potential of your app!</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-300 md:border-t flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faChartColumn} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Data Analytics</h3>
                        <p className="mt-5 text-base text-gray-600">Transform raw data into actionable insights with our advanced analytics solutions. From trend forecasting to AI-driven reports, we help you make smarter, data-backed decisions for business growth. Harness the power of data today!</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-300 md:border-t flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faShield} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Cybersecurity & Compliance</h3>
                        <p className="mt-5 text-base text-gray-600">Protect your business with robust cybersecurity and compliance solutions. From data protection to regulatory adherence, we ensure secure, seamless, and compliant operations. Stay ahead of threats—stay compliant!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}