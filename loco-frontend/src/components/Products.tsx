import {
  culinaryProducts,
  decorProducts,
  spicesProducts,
  vegetableProducts,
} from "../utils";

import Product from "./Product";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation(["home"]);
  return (
    <>
      <section className="w-screen pt-36 pb-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            {t("products.category_1.heading")}
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {vegetableProducts.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-10 bg-gradient-to-br from-[#FFFEFF] to-gray-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            {t("products.category_2.heading")}
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {culinaryProducts.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-boldtext-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            {t("products.category_3.heading")}
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {spicesProducts.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="w-screen py-10 bg-gradient-to-br from-[#FFFEFF] to-gray-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">
            {t("products.category_4.heading")}
          </h1>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {decorProducts.map((product, index) => (
            <Product
              key={index.toString()}
              id={index}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
