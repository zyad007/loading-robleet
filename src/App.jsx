import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SparklesCore } from './ui/sparkles'
import Tip from './components/Tip'

function App() {
  
  return (
    <div className='w-screen overflow-x-hidden select-none'>
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
      <div class="loadings left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div class="loading1"></div>
        <div class="loading2"></div>
        <div class="loading3"></div>
      </div>
      <div class="circles left-1/2 top-0 -translate-x-1/2">
        <div class="circle1">
          <img className='absolute right-10 top-10 w-40' src="../public/gift.png" alt="" />
        </div>
        <div class="circle2">
          <img className='w-40 absolute right-10 bottom-10' src="../public/rank.png" alt="" />
        </div>
        <div class="circle3">
          <img className='w-40 absolute top-10 left-1/2' src="../public/xp.png" alt="" />
        </div>
        <div class="circle4">
          <img className='absolute bottom-10 left-10 w-40' src="https://robleet.com/assets/assets/drawer/fire.svg" alt="" />
        </div>
        <div class="circle5">
          <img className='absolute top-1/2 left-10 w-40' src="../public/lightning.png" alt="" />
        </div>
        <div class="circle6">
          <img className='w-40 absolute top-10 left-10' src="../public/star.png" alt="" />
        </div>
        <div class="circle7">
          <img className='w-40 absolute right-[40%] bottom-10' src="https://robleet.com/assets/assets/images/robux.svg" alt="" />
        </div>
      </div>
      <div className='absolute flex flex-col top-0 w-full h-full justify-center items-center'>
        <img className='w-[29%]' src="../finallogo.png" alt="" />
        <Tip />
      </div>
    </div>
    // <div className="h-screen relative w-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    //   <div class="circles left-1/2 top-1/2 -translate-x-1/2">
    //     <div class="circle1">
    //       <img className='absolute right-10 top-10 w-40' src="../public/gift.png" alt="" />
    //     </div>
    //     <div class="circle2">
    //       <img className='w-40 absolute right-10 bottom-10' src="../public/rank.png" alt="" />
    //     </div>
    //     <div class="circle3">
    //       <img className='w-40 absolute top-10 left-10' src="../public/xp.png" alt="" />
    //     </div>
    //     <div class="circle4">
    //       <img className='absolute bottom-10 left-10 w-40' src="https://robleet.com/assets/assets/drawer/fire.svg" alt="" />
    //     </div>
    //   </div>
    //   <div className='absolute top-0 w-full h-full flex justify-center items-center'>
    //     <img className='w-[20%]' src="../finallogo.png" alt="" />
    //   </div>
    // </div>
  )
}

export default App
