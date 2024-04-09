import React from 'react'
import { SparklesCore } from '../ui/sparkles'

export default function Loading2() {
    return (
        <div className='w-screen'>
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#ffd754"
                />
            </div>
            <div className='absolute top-0 w-full h-full flex justify-center items-center'>
                <img className='fixed w-[12%]' src="../loading.gif" alt="" />
                <img className='w-[11%]' src="../finallogo_1.png" alt="" />
            </div>
        </div>
    )
}
