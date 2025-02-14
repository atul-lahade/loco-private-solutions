type ProductProps = {
    id: number;
    title: string;
    image: string;
    description: string;
}

export default function Product(props: ProductProps) {
    return (
        <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-2xl bg-gradient-to-br from-[#FFFEFF] to-gray-100">
            <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src={props.image} alt="blog" />
            <div className="flex items-center justify-center py-2 sm:px-6 lg:px-8">
                <h3 className="text-2xl text-[#799AA3] mt-4">
                    {props.title}
                </h3>
            </div>
            <div className="py-2 px-6">
                <p className="line-clamp-none mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">{props.description}</p>
            </div>
        </article>
    );
}