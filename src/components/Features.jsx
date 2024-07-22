import React from "react";
import { features } from "../constants/index.jsx";
const Features = () => {
    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Feature
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 font-bold tracking-tight">
                    Easily Build
                    <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                        {" "}
                        Maintainable Code
                    </span>
                </h2>
            </div>

            <div className="flex flex-wrap mt-10 lg:mt-20 justify-center pl-20">
                {features.map((item, index) => (
                    <div key={index} className="flex mt-20 mr-20 sm:1/2 lg:w-1/4">
                        <div className="mr-5 text-blue-500">{item.icon}</div>
                        <div className="w-56">
                            <h4 className="mb-5">{item.text}</h4>
                            <p className="text-neutral-400">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Features;
