import React from 'react'
import { ReactComponent as FacebookIcon } from '../../icons/facebook.svg';
import { ReactComponent as Github } from '../../icons/github.svg';
import { ReactComponent as Youtube } from '../../icons/youtube.svg';




const SocialTop = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 items-center bg-pink-500 rounded-tl-3xl rounded-br-3xl p-4 justify-center">

                <FacebookIcon className="w-6 h-6 text-white hover:text-pink-400 fill-current" />



                <Github className="w-6 h-6 text-white hover:text-pink-400 fill-current" />


                <Youtube className="w-6 h-6 text-white hover:text-pink-400 fill-current" />

            </div>
        </div>
    )
}

export default SocialTop
