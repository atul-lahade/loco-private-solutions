import demoVideo from "../assets/videos/export-global.mp4";

export default function VideoPlayer() {
    return (
        <div className="relative bg-black w-full h-[75vh] md:h-[50vh] lg:h-[60vh] sm:mt-4 md:mt-6 lg:mt-8">
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
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Export Your Way to Success
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Providing top-notch export services for your business
                    </p>
                    <a
                        href="#"
                        className="px-6 py-3 bg-[#C7E9F3] text-black font-medium rounded-lg shadow-md hover:bg-white transition duration-300"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}