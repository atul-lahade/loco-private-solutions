import demoVideo from "../assets/videos/export-global.mp4";
import { productsRoute } from "~/utils";
import { useTranslation } from "react-i18next";

export default function VideoPlayer() {
    const { t } = useTranslation(['home']);
    return (
        <div className="relative bg-black h-[65vh] md:h-[50vh] lg:h-[60vh] shadow-2xl mt-16">
            <div className="absolute inset-0 flex items-center justify-center">
                <video
                    className="h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source
                        src={demoVideo}
                        type="video/mp4"
                    />
                    Globe Video
                </video>
            </div>
            <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        {t("video_player.heading")}
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        {t("video_player.desc")}
                    </p>
                    <a
                        href={productsRoute}
                        className="px-6 py-3 bg-[#6a838f] hover:bg-[#3a5662] text-white font-medium rounded-lg shadow-md transition duration-300"
                    >
                        {t("buttons.get_started")}
                    </a>
                </div>
            </div>
        </div>
    );
}