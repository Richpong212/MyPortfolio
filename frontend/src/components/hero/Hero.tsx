import React from 'react'
import Bubble from './Bubble'
import SocialTop from './SocialTop'

const Hero = () => {
    return (
        <div className='flex items-center'>
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="flex-1 space-y-6 text-center md:text-left pt-20 ">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hey Meet, <br />
                        <span className="text-pink-400">Janet R.!</span>
                    </h1>
                    <div className='py-20'>
                        <h2 className="text-xl font-semibold">Top UX/UI Designer</h2>
                        <p className="text-gray-300 max-w-md mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    {/* Social Icons Placeholder */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <div className="w-12 h-12 bg-green-500 rounded-full">
                            <img
                                src="/icons/social.svg"
                                alt="Social Icon"


                            />
                        </div>
                        <div className="w-12 h-12 bg-blue-500 rounded-full">
                            <img
                                src="/icons/social1.svg"
                                alt="Social Icon"

                            />
                        </div>
                        <div className="w-10 h-10 bg-purple-500 rounded-full">
                            <img
                                src="/icons/social2.svg"
                                alt="Social Icon"
                            />
                        </div>
                    </div>
                    {/* Glowing Mouse Icon */}
                    <div className="absolute bottom-10 transform -translate-x-1/2 animate-blink hover:drop-shadow-[0_0_8px_#ec4899]">
                        <img
                            src="/icons/mouse.svg"
                            alt="Scroll Mouse"
                            className="w-14 h-14"
                        />
                    </div>
                </div>

                {/* middle Content */}
                <div className="flex-1 md:absolute md:top-1/3 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/3 md:ml-20">
                    <Bubble />
                </div>

            </div>

            {/* Social Icons */}
            <div className="absolute top-0 right-0 p-4 md:pr-20">
                <SocialTop />
            </div>
        </div>
    )
}

export default Hero
