import React from 'react'
import code from '../assets/code.jpg';
import { checklistItems } from '../constants';
const Workflow = () => {
    return (
        <div className=''>

            <div className=''>
                <h1 className='text-6xl text-center mt-20'>Accelarate your <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text"> coding workflow.</span></h1>
            </div>

            <div className='flex mb-20'>
                <div className='lg:w-1/2 mt-20'>
                    <img src={code} alt="" />
                </div>

                {checklistItems.map((item, index))}
                <div className='flex lg:w-1/2 mt-20'>
                    Checklist
                </div>
            </div>
        </div>
    )
}

export default Workflow