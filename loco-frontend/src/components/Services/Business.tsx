import {
  faBullhorn,
  faChartLine,
  faCogs,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function Business() {
  const { t } = useTranslation(["home"]);
  return (
    <section
      id="new-features"
      className="py-8 bg-white sm:py-10 lg:py-16 mt-20 md:mt-16 sm:mt-12 bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-100"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-primary to-danger">
            {t("business_consulting.heading")}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:mt-8">
            {t("business_consulting.desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24">
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center md:border-b  md:border-r md:border-gray-300">
            <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-3xl text-gray-900"
              />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              {t("business_consulting.service_1.heading")}
            </h3>
            <p className="mt-5 text-base text-gray-600">
              {t("business_consulting.service_1.desc")}
            </p>
          </div>
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="text-3xl text-gray-900"
              />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              {t("business_consulting.service_2.heading")}
            </h3>
            <p className="mt-5 text-base text-gray-600">
              {t("business_consulting.service_2.desc")}
            </p>
          </div>
          <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faCogs}
                className="text-3xl text-gray-900"
              />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              {t("business_consulting.service_3.heading")}
            </h3>
            <p className="mt-5 text-base text-gray-600">
              {t("business_consulting.service_3.desc")}
            </p>
          </div>
          <div className="md:p-8 lg:p-14 md:border-t md:border-l md:border-gray-300 flex flex-col justify-center items-center">
            <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-3xl text-gray-900"
              />
            </div>
            <h3 className="mt-12 text-xl font-bold text-gray-900">
              {t("business_consulting.service_4.heading")}
            </h3>
            <p className="mt-5 text-base text-gray-600">
              {t("business_consulting.service_4.desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
