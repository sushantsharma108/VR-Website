import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center space-x-5 mt-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center max-w-4xl">
                    ViSys build the tools for{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
                        VR & AR Developers
                    </span>
                </h1>
                <p className="text-lg text-center leading-10 mt-10 max-w-4xl">
                    Empower your creativity and bring your app ideas to the life with our
                    amazing build tools.
                </p>
                <p className="text-lg text-center leading-10 max-w-4xl">
                    Get started today and turn your imagination into immersive reality.
                </p>
            </div>

            <div className="flex justify-center items-center space-x-5 mt-10">
                <button className="px-4 py-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-900 ">
                    Start for Free
                </button>
                <button className="px-4 py-3 border rounded-md">Documentation</button>
            </div>

            {/* Videos */}
            <div className="lg:flex justify-center mt-10">
                <video
                    autoPlay
                    loop
                    muted
                    className="sm:flex flex-col h-full rounded-lg lg:w-1/2 mx-2 my-4"
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="sm:flex flex-col h-full rounded-lg lg:w-1/2 mx-2 my-4"
                >
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
};

export default Hero;
