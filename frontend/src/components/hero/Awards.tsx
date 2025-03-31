import React from 'react'


const Awards = () => {
    return (
        <div className='flex items-center justify-center absolute bottom-10 --left-100 transform -translate-x-1/2 animate-blink hover:drop-shadow-[0_0_8px_#ec4899]'>
            <img
                src="/icons/certificate.svg"
                alt="awards image"
                className="w-1/2 h-auto invert"
            />
        </div>
    )
}

export default Awards
