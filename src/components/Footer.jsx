import React from 'react'
import { resourcesLinks } from '../constants'
import { platformLinks } from '../constants'
import { communityLinks } from '../constants'

const Footer = () => {
    return (
        <footer className='mt-20 border-t py-10'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='mt-5 mr-20'>
                    <h3 className='text-md font-semibold mb-4'>Resources</h3>
                    <ul className='space-y-2'>
                        {resourcesLinks.map((item, index) => (
                            <li key={index}>
                                <a className='text-neutral-400 hover:text-white' href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-5 mr-20'>
                    <h3 className='text-md font-semibold mb-4'>Platform</h3>
                    <ul className='space-y-2'>
                        {platformLinks.map((item, index) => (
                            <li key={index}>
                                <a className='text-neutral-400 hover:text-white' href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-5 mr-20'>
                    <h3 className='text-md font-semibold mb-4'>Community</h3>
                    <ul className='space-y-2'>
                        {communityLinks.map((item, index) => (
                            <li key={index}>
                                <a className='text-neutral-400 hover:text-white' href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <p className='mt-10 text-center text-sm text-neutral-50'>&copy; 2024 ViSys. All rights reserved.</p>
        </footer>
    )
}

export default Footer