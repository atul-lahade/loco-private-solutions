import { faBullhorn, faChartLine, faCogs, faGlobe } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Business() {
    return (
        <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16 mt-20 md:mt-16 sm:mt-12 bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
                        Business Consultancy Services
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
                        We help businesses scale, optimize operations, and expand globally with expert strategies.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center md:border-b  md:border-r md:border-gray-300">
                        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faChartLine} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Growth & Strategy</h3>
                        <p className="mt-5 text-base text-gray-600">We develop data-driven business strategies to help you scale efficiently, optimize resources, and stay ahead of competitors.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faBullhorn} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Digital Marketing & Branding</h3>
                        <p className="mt-5 text-base text-gray-600">Elevate your brand with targeted digital marketing, SEO, and branding strategies that drive engagement and conversions.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faCogs} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Operational Efficiency</h3>
                        <p className="mt-5 text-base text-gray-600">Enhance productivity with process optimization, automation, and workflow improvements tailored for business success.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-t md:border-l md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faGlobe} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Market Entry & Expansion</h3>
                        <p className="mt-5 text-base text-gray-600">Break into new markets with expert guidance on global expansion, partnerships, and regulatory compliance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}