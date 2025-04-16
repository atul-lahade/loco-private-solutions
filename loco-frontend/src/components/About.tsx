import aboutImg from "../assets/images/about/about-us.png";
import certifiedImg from "../assets/images/about/certified.png";
import commitmentImg from "../assets/images/about/commitment.png";
import innovationImg from "../assets/images/about/innovation.png";
import missionImg from "../assets/images/about/mission.png";
import { productsRoute } from "../utils";
import qualityImg from "../assets/images/about/quality.png";
import reliabilityImg from "../assets/images/about/reliability.png";
import sustainabilityImg from "../assets/images/about/sustainability.png";
import { useTranslation } from "react-i18next";
import valuesImg from "../assets/images/about/values.png";
import visionImg from "../assets/images/about/vision.png";
import whatWeDoImg from "../assets/images/about/what-we-do.png";
import whoWeAreImg from "../assets/images/about/who-we-are.png";

export default function About() {
  const { t } = useTranslation(["home"]);

  return (
    <div className="font-poppins">
      <section className="pt-32 px-10 pb-16 relative">
        <div className="w-full max-w-7xl p-4 md:p-5 lg:p-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                <h2 className="text-[#40545a] text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {t("about.heading")}
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  {t("about.desc")}
                </p>
              </div>
              <a
                href={productsRoute}
                className="px-6 py-3 bg-[#6a838f] hover:bg-[#3a5662] text-white font-medium rounded-lg shadow-md transition duration-300"
              >
                {t("buttons.get_started")}
              </a>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover drop-shadow-[0_10px_20px_rgba(121,154,163,0.5)] transition-transform duration-300 transform hover:scale-110"
              src={aboutImg}
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="w-full max-w-7xl p-4 md:p-5 lg:p-5 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-8">
            <div className="flex flex-row items-center lg:items-start gap-4">
              <img
                className="w-28 h-28 rounded-3xl group-hover:scale-105 transition duration-300 ease-in-out"
                src={missionImg}
                alt="Mission image"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#40545a] mb-3">
                  {t("about.mission_heading")}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {t("about.mission_desc")}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center lg:items-start gap-4">
              <img
                className="w-28 h-28 rounded-3xl group-hover:scale-105 transition duration-300 ease-in-out"
                src={visionImg}
                alt="Vision image"
              />
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#40545a] mb-3">
                  {t("about.vision_heading")}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  {t("about.vision_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#FFFEFF] to-gray-300">
        <div className="container mx-auto p-6 md:p-12 mt-6">
          <div className="text-center pt-6 mb-12">
            <img
              className="mx-auto w-16 h-16 md:w-20 md:h-20"
              src={valuesImg}
              alt="Leaf-heading"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-[#40545a]">
              {t("about.values.heading")}
            </h2>
            <div className="mt-2 flex justify-center">
              <hr
                aria-hidden="true"
                role="separator"
                className="border-t-2 border-gray-300 w-16 md:w-20"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={qualityImg}
                alt="Quality assurance"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">
                {t("about.values.value_1.heading")}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    {t("about.values.value_1.slogan")}
                    <br />
                  </em>
                </strong>
                {t("about.values.value_1.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={reliabilityImg}
                alt="Reliability"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">
                {t("about.values.value_2.heading")}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    {t("about.values.value_2.slogan")}
                    <br />
                  </em>
                </strong>
                {t("about.values.value_2.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={certifiedImg}
                alt="Certified Services"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">
                {t("about.values.value_3.heading")}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    {t("about.values.value_3.slogan")}
                    <br />
                  </em>
                </strong>
                {t("about.values.value_3.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={commitmentImg}
                alt="Commitment"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">
                {t("about.values.value_4.heading")}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    {t("about.values.value_4.slogan")}
                    <br />
                  </em>
                </strong>
                {t("about.values.value_4.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={innovationImg}
                alt="Innovation"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">
                {t("about.values.value_5.heading")}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    {t("about.values.value_5.slogan")}
                    <br />
                  </em>
                </strong>
                {t("about.values.value_5.desc")}
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-lg shadow-md">
              <img
                className="mx-2 my-2 w-12 h-12 md:w-14 md:h-14"
                src={sustainabilityImg}
                alt="Sustainability"
              />
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#40545a]">
                {t("about.values.value_6.heading")}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">
                <strong>
                  <em>
                    {t("about.values.value_6.slogan")}
                    <br />
                  </em>
                </strong>
                {t("about.values.value_6.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col p-6 mt-6">
        <div className="container mx-auto">
          <div className="text-center pt-6 mb-12">
            <img
              className="mx-auto w-20 h-20"
              src={whoWeAreImg}
              alt="Leaf-heading"
            />
            <h2 className="text-4xl font-bold text-[#40545a]">
              {t("about.who")}
            </h2>
            <div className="mt-2 flex justify-center">
              <hr
                aria-hidden="true"
                role="separator"
                className="border-t-2 border-gray-300 w-[60px]"
              />
            </div>
          </div>
        </div>
        <div className="flex  px-8 md:px-12 lg:px-16">
          <p className="text-justify text-gray-600">{t("about.who_desc")}</p>
        </div>
      </section>
      <section className="p-6 mb-12">
        <div className="container mx-auto">
          <div className="text-center pt-6 mb-12">
            <img
              className="mx-auto w-20 h-20"
              src={whatWeDoImg}
              alt="Leaf-heading"
            />
            <h2 className="text-4xl font-bold text-[#40545a]">
              {t("about.what")}
            </h2>
            <div className="mt-2 flex justify-center">
              <hr
                aria-hidden="true"
                role="separator"
                className="border-t-2 border-gray-300 w-[60px]"
              />
            </div>
          </div>
        </div>
        <div className="flex px-8 md:px-12 lg:px-16">
          <p className="text-justify text-gray-600">{t("about.what_desc")}</p>
        </div>
      </section>
    </div>
  );
}
