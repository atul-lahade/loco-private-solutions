import { faLeaf, faShippingFast, faSpa, faUserMd } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Ayurvedic() {
    return (
        <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16 mt-20 md:mt-16 sm:mt-12 bg-gradient-to-r from-green-50 via-emerald-50 to-green-100 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
                    Heal Naturally with Expert Ayurvedic Consultancy
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
                    Get expert Ayurvedic consultations via video calls, personalized health plans, herbal medicine recommendations, and safe, secure product shipping—all from experienced Ayurvedic doctors. Heal naturally, live better!
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center md:border-b  md:border-r md:border-gray-300">
                        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faUserMd} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Personalized Health Consultations</h3>
                        <p className="mt-5 text-base text-gray-600">One-on-one virtual Ayurvedic consultations with expert doctors to diagnose imbalances and create tailored wellness plans for holistic healing.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faLeaf} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Herbal Medicine Recommendations</h3>
                        <p className="mt-5 text-base text-gray-600">Customized herbal remedies and formulations based on your health needs, ensuring safe, natural healing with time-tested Ayurvedic wisdom.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faSpa} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Traditional & Holistic Healing Guidance</h3>
                        <p className="mt-5 text-base text-gray-600">Balance mind, body, and spirit with Ayurvedic principles, dietary advice, yoga, and lifestyle recommendations for long-term well-being.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-t md:border-l md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faShippingFast} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Safe & Secure Shipping of Ayurvedic Products</h3>
                        <p className="mt-5 text-base text-gray-600">Get authentic Ayurvedic medicines delivered worldwide with secure packaging and trusted shipping, ensuring quality and purity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}