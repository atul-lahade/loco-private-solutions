import { faBalanceScale, faChartLine, faLightbulb, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MarketingResearch() {
    return (
        <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16 mt-20 md:mt-16 sm:mt-12 bg-gradient-to-r from-slate-50 via-rose-50 to-red-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
                        Market Insights That Drive Success
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
                        Make informed business decisions with customized market research reports, covering industry trends, competitor analysis, customer insights, and demand forecasting for strategic growth.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center md:border-b  md:border-r md:border-gray-300">
                        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faChartLine} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Industry Trends & Analysis</h3>
                        <p className="mt-5 text-base text-gray-600">Stay ahead with data-driven insights on emerging industry trends, market shifts, and growth opportunities, helping you adapt and innovate in a rapidly evolving business landscape.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faBalanceScale} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Competitor Benchmarking</h3>
                        <p className="mt-5 text-base text-gray-600">Analyze your competitors’ strengths, weaknesses, and market positioning to refine your strategy, improve offerings, and gain a competitive edge in your industry.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faLightbulb} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Customer Behavior Insights</h3>
                        <p className="mt-5 text-base text-gray-600">Understand customer preferences, buying patterns, and decision drivers to enhance engagement, optimize marketing strategies, and improve product offerings for maximum impact.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-t md:border-l md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faSyncAlt} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Demand & Supply Forecasting</h3>
                        <p className="mt-5 text-base text-gray-600">Predict market demand and supply trends with data-driven forecasting, ensuring efficient inventory management, optimized pricing strategies, and a seamless supply chain.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}