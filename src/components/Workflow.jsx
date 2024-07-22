import React from 'react'
import code from '../assets/code.jpg';
import { checklistItems } from '../constants';
import { CircleCheckIcon } from 'lucide-react';
const Workflow = () => {
    return (
        <div className=''>

            <div className=''>
                <h1 className='text-6xl text-center mt-20'>Accelarate your <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"> coding workflow.</span></h1>
            </div>

            <div className='lg:flex mb-20'>
                <div className='lg:w-1/2 mt-20'>
                    <img src={code} alt="" />
                </div>

                <div className='lg:w-1/2 mt-20'>
                    {checklistItems.map((item, index) => (
                        <div key={index} className='flex mt-16 mb-10'>
                            <p className='mt-0.5 mr-5'>{<CircleCheckIcon color="#00ff00" />}</p>
                            <div>
                                <h3 className='text-white-900'>{item.title}</h3>
                                <p className='w-4/5 text-neutral-400'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workflow



