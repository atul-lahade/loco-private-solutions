import aboutUs from "../assets/images/about/about.png";
import missionImg from "../assets/images/about/mission.png";
import visionImg from "../assets/images/about/vision.png";
import valuesImg from "../assets/images/aboutlues.png";
import qualityImg from "../assets/images/aboutality.png";
import reliabilityImg from "../assets/images/aboutliability.png";
import certifiedImg from "../assets/images/aboutrtified.png";
import innovationImg from "../assets/images/about/innovation.png";
import commitmentImg from "../assets/images/about/commitment.png";
import sustainabilityImg from "../assets/images/aboutstainability.png";
import whoWeAreImg from "../assets/images/about/who-we-are.png";
import whatWeDoImg from "../assets/images/aboutat-we-do.png";

import { NavLink } from "react-router";

export default function About() {
    return (
        <div className="font-poppins">
            <section className="pt-32 px-10 pb-16 relative">
                <div className="w-full max-w-7xl p-4 md:p-5 lg:p-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                <h2 className="text-[#40545a] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Spreading the Taste of India, One Shipment at a Time</h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">We are Loco Private Solutions, a leading exporter of high-quality products worldwide. We specialize in providing top-notch services to our clients, ensuring timely and efficient delivery. Contact us today to learn more about how we can assist you with your export needs.</p>
                            </div>
                            <a
                                href="/products"
                                className="px-6 py-3 bg-[#6a838f] hover:bg-[#3a5662] text-white font-medium rounded-lg shadow-mdtransition duration-300"
                            >
                                Get Started
                            </a>
                        </div>
                        <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover shadow-2xl" src={aboutUs} alt="about Us image" />
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="w-full max-w-7xl p-4 md:p-5 lg:p-5 mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-8">
                        <div className="flex flex-row items-center lg:items-start gap-4">
                            <img className="w-28 h-28 rounded-3xl group-hover:scale-105 transition duration-300 ease-in-out" src={missionImg} alt="Mission image" />
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-[#40545a] mb-3">OUR MISSION</h3>
                                <p className="text-gray-500 text-base leading-relaxed">To deliver premium agricultural produce and artisanal decor, sharing India’s rich culture with discerning customers worldwide.</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center lg:items-start gap-4">
                            <img className="w-28 h-28 rounded-3xl group-hover:scale-105 transition duration-300 ease-in-out" src={visionImg} alt="Vision image" />
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-bold text-[#40545a] mb-3">OUR VISION</h3>
                                <p className="text-gray-500 text-base leading-relaxed">Bringing India’s finest flavors and craftsmanship to the world, we strive to unite authenticity, quality, and heritage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-br from-[#FFFEFF] to-gray-300">
                <div className="container mx-auto p-6 md:p-12 mt-6">
                    <div className="text-center pt-6 mb-12">
                        <img className="mx-auto w-16 h-16 md:w-20 md:h-20" src={valuesImg} alt="Leaf-heading" />
                        <h2 className="text-3xl md:text-4xl font-bold text-[#40545a]">Values</h2>
                        <div className="mt-2 flex justify-center">
                            <hr aria-hidden="true" role="separator" className="border-t-2 border-gray-300 w-16 md:w-20" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
                            <img className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14" src={qualityImg} alt="Quality assurance" />
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">Best Quality Services</h4>
                            <p className="text-gray-500 text-sm md:text-base"><strong><em>"Excellence in Every Grain"<br /></em></strong>
                                We ensure top-notch quality, freshness, and authenticity in every product.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
                            <img className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14" src={reliabilityImg} alt="Reliability" />
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">Vast Experience in Food Trading</h4>
                            <p className="text-gray-500 text-sm md:text-base"><strong><em>"Global Expertise, Seamless Trade"<br /></em></strong>Decades of experience in sourcing and exporting premium food products.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
                            <img className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14" src={certifiedImg} alt="Certified Services" />
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">Trusted &amp; Legally Approved Certified Services</h4>
                            <p className="text-gray-500 text-sm md:text-base"><strong><em>"Certified Quality, Transparent Practices"<br /></em></strong>Fully compliant with international food safety and trade regulations.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
                            <img className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14" src={commitmentImg} alt="Commitment" />
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">Commitment &amp; Time Adherence</h4>
                            <p className="text-gray-500 text-sm md:text-base"><strong><em>"Freshness Delivered On Time"<br /></em></strong>Reliable logistics ensure timely and efficient global shipments.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
                            <img className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14" src={innovationImg} alt="Innovation" />
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">Innovation in Food & Trade</h4>
                            <p className="text-gray-500 text-sm md:text-base"><strong><em>"Modern Solutions, Timeless Flavors"<br /></em></strong>Cutting-edge processing, packaging, and sustainable trade practices.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
                            <img className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14" src={sustainabilityImg} alt="Sustainability" />
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">Sustainability & Ethical Sourcing</h4>
                            <p className="text-gray-500 text-sm md:text-base"><strong><em>"Responsible Sourcing, Better Future"<br /></em></strong>Supporting farmers and eco-friendly practices for a sustainable food trade.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col p-6 mt-6">
                <div className="container mx-auto">
                    <div className="text-center pt-6 mb-12">
                        <img className="mx-auto w-20 h-20" src={whoWeAreImg} alt="Leaf-heading" />
                        <h2 className="text-4xl font-bold text-[#40545a]">Who We Are?</h2>
                        <div className="mt-2 flex justify-center">
                            <hr aria-hidden="true" role="separator" className="border-t-2 border-gray-300 w-[60px]" />
                        </div>
                    </div>
                </div>
                <div className="flex  px-8 md:px-12 lg:px-16">
                    <p className="text-justify text-gray-600">We are a team driven by a passion for sharing India's rich heritage with the world. Specializing in the export of premium agricultural produce, aromatic spices, and exquisite home decor, we take pride in delivering authenticity, quality, and craftsmanship. Our commitment to excellence ensures that every product reflects India's vibrant culture and unmatched flavors. By building strong global connections and upholding the highest standards, we aim to be a trusted partner in bringing India's finest offerings to homes and businesses worldwide.</p>
                </div>
            </section>
            <section className="p-6 mb-12">
                <div className="container mx-auto">
                    <div className="text-center pt-6 mb-12">
                        <img className="mx-auto w-20 h-20" src={whatWeDoImg} alt="Leaf-heading" />
                        <h2 className="text-4xl font-bold text-[#40545a]">What We Do?</h2>
                        <div className="mt-2 flex justify-center">
                            <hr aria-hidden="true" role="separator" className="border-t-2 border-gray-300 w-[60px]" />
                        </div>
                    </div>
                </div>
                <div className="flex px-8 md:px-12 lg:px-16">
                    <p className="text-justify text-gray-600">We specialize in exporting India's finest agricultural produce, aromatic spices, gourmet essentials, and exquisite home decor to global markets. With a strong focus on quality, authenticity, and craftsmanship, we ensure that our products meet international standards while preserving their cultural essence. From sourcing the freshest farm produce to curating handcrafted decor, we bridge the gap between India’s rich heritage and the world, delivering excellence with every shipment.</p>
                </div>
            </section>
        </div>
    );
}