import React from "react";
import codeImage from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CircleCheckIcon } from "lucide-react";
const Workflow = () => {
    return (
        <div className="mt-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Accelarate your{" "}
                <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
                    {" "}
                    coding workflow.
                </span>
            </h1>

            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                    <img src={codeImage} alt="code image" />
                </div>

                <div className="pt-12 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                <CircleCheckIcon color="#00ff00" />
                            </div>

                            <div>
                                <h3 className="mt-1 mb-2 text-xl">{item.title}</h3>
                                <p className="text-md text-neutral-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow;
