import { faCalculator, faCode, faLanguage, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Education() {
    return (
        <section id="new-features" className="py-8 bg-white sm:py-10 lg:py-16 mt-20 md:mt-16 sm:mt-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
                        Education Services – Learn, Grow, Succeed!
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
                        Empower yourself with specialized tutoring and training to enhance your knowledge and skills. We offer expert guidance in languages, mathematics, coding, and customized learning solutions.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center md:border-b  md:border-r md:border-gray-300">
                        <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faLanguage} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Regional Language Tutoring</h3>
                        <p className="mt-5 text-base text-gray-600">Improve fluency, writing, and communication in your regional language with expert-led sessions tailored to your learning pace. Perfect for students, professionals, and language enthusiasts.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faCalculator} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Mathematics Coaching</h3>
                        <p className="mt-5 text-base text-gray-600">Build a strong mathematical foundation with structured coaching for all levels, from basic arithmetic to advanced problem-solving techniques.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faCode} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Coding Language Training</h3>
                        <p className="mt-5 text-base text-gray-600">Learn in-demand programming languages like Python, Java, and JavaScript through hands-on training and real-world projects. Ideal for beginners and professionals.</p>
                    </div>
                    <div className="md:p-8 lg:p-14 md:border-t md:border-l md:border-gray-300 flex flex-col justify-center items-center">
                        <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                            <FontAwesomeIcon icon={faUserGraduate} className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-12 text-xl font-bold text-gray-900">Customized Educational Support</h3>
                        <p className="mt-5 text-base text-gray-600">Get personalized tutoring based on your unique learning needs—whether academic, professional, or skill-based—to ensure maximum growth and success.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}