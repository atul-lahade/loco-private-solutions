import { culinaryProducts, decorProducts, spicesProducts, vegetableProducts } from "~/utils";

import Product from "./Product";

export default function Products() {
    return (
        <>
            <section className="w-screen pt-36 pb-10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">Export-Quality Indian Spices & Vegetables</h1>
                </div>
                <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    {vegetableProducts.map((product, index) => (
                        <Product id={index} title={product.title} image={product.image} description={product.description} />
                    ))}
                </div>
            </section>
            <section className="w-screen py-10 bg-gradient-to-br from-[#FFFEFF] to-gray-300">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">Gourmet Essentials & Culinary Creations</h1>
                </div>
                <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    {culinaryProducts.map((product, index) => (
                        <Product id={index} title={product.title} image={product.image} description={product.description} />
                    ))}
                </div>
            </section>
            <section className="w-screen py-10">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-boldtext-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">Aromatic Spices</h1>
                </div>
                <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    {spicesProducts.map((product, index) => (
                        <Product id={index} title={product.title} image={product.image} description={product.description} />
                    ))}
                </div>
            </section>
            <section className="w-screen py-10 bg-gradient-to-br from-[#FFFEFF] to-gray-300">
                <div className="px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#799AA3] font-['League_Spartan',_arial,_helvetica,_sans-serif]">Home & Garden Decor</h1>
                </div>
                <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    {decorProducts.map((product, index) => (
                        <Product id={index} title={product.title} image={product.image} description={product.description} />
                    ))}
                </div>
            </section>
        </>
    );
}