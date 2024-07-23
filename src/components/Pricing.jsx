import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Pricing = () => {
    return (
        <>
            <div className="mt-20">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-10">
                    Pricing
                </h1>
                <h4 className="text-3xl sm:text-4xl lg:text-5xl text-center">
                    Choose Your Plan
                </h4>
            </div>

            <div className="flex flex-wrap justify-center items-center mt-10">
                {pricingOptions.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="mb-8 text-4xl">
                                {item.title}
                                {item.title === "Pro" && <span className="bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text text-xl mb-4"> (Most Popular)</span>}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">
                                    {item.price}
                                </span>
                                <span className="text-neutral-400 tracking-tight">
                                    /Month
                                </span>
                            </p>
                            <ul>
                                {item.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        {<CheckCircle2 />}
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-neutral-700 rounded-lg hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:scale-110 transition duration-200">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Pricing;
