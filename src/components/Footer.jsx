import React from 'react'
import { resourcesLinks } from '../constants'
import { platformLinks } from '../constants'
import { communityLinks } from '../constants'

const Footer = () => {
    return (
        <div className='flex flex-wrap mt-10'> 
            <div className='mt-5 mr-20'>
                <h3>Resources</h3>
                {resourcesLinks.map((item, index) => (
                    <div>
                        <a href={item.href}>{item.text}</a>
                    </div>
                ))}
            </div>

            <div className='mt-5 mr-20'>
                <h3>Platform</h3>
                {platformLinks.map((item, index) => (
                    <div>
                        <a href={item.href}>{item.text}</a>
                    </div>
                ))}
            </div>

            <div className='mt-5'>
                <h3>Resources</h3>
                {resourcesLinks.map((item, index) => (
                    <div>
                        <a href={item.href}>{item.text}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer