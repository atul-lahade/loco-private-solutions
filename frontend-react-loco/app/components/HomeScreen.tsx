import { ImageSlider } from "./ImageSlider";
import VideoPlayer from "./VideoPlayer";
import { useTranslation } from "react-i18next";

export default function HomeScreen() {
    const { t } = useTranslation(['home']);
    return (
        <div className="flex flex-col font-poppins min-h-screen">
            <VideoPlayer />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6 lg:py-8">
                <section className="text-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#799AA3]">
                            <span>{t("home.companyName")}</span>
                            <div className="mt-2 flex justify-center">
                                <hr aria-hidden="true" role="separator" className="border-t-2 border-gray-300 w-1/6" />
                            </div>
                        </h2>
                        <div className="flex justify-center">
                            <div className="max-w-4xl">
                                <div className="mb-6">
                                    <div className="relative">
                                        <span>
                                            <picture>
                                                <source media="(max-width: 450px)" srcSet="https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:403,h:202,cg:true, https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:806,h:403,cg:true 2x, https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1209,h:605,cg:true 3x" />
                                                <source media="(min-width: 451px) and (max-width: 767px)" srcSet="https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:719,h:360,cg:true, https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1270,h:635,cg:true 2x" />
                                                <source media="(min-width: 768px) and (max-width: 1023px)" srcSet="https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1023,h:512,cg:true, https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1270,h:635,cg:true 2x" />
                                                <source media="(min-width: 1024px)" srcSet="https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1240,h:620,cg:true, https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1270,h:635,cg:true 2x" />
                                                <img src="https://img1.wsimg.com/isteam/stock/yrE3VwP/:/cr=t:11.56%25,l:0%25,w:100%25,h:76.88%25/rs=w:1240,h:620,cg=true" alt="Loco Private Solutions" className="w-full h-auto" />
                                            </picture>
                                        </span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-[#799AA3]">{t("home.companySlogan")}</h4>
                                    <div className="mt-4">
                                        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
                                            <span>{t("home.companyDesc")}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ImageSlider />
        </div>
    );
}