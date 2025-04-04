import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei'


const Bubble = () => {
    return (
        <div>
            <div className='relative flex items-center '>

                <div>
                    <img
                        src="/images/portfolio.png"
                        alt="portfolio image"
                        className='relative z-10'
                    /></div>
            </div>
            {/* Typewriter Text */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-xl shadow-md text-sm font-medium max-w-xs">
                {/* Bubble Tail */}
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
                <Typewriter
                    words={['UX/UI Designer', 'Web Developer', 'Content Creator']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}

                />
            </div>



        </div>
    )
}

export default Bubble