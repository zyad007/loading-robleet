import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen'>
      <div class="circles left-1/2 top-1/2 -translate-x-1/2">
        <div class="circle1">
          <img className='absolute right-10 top-10 w-40' src="../public/gift.png" alt="" />
        </div>
        <div class="circle2">
          <img className='w-40 absolute right-10 bottom-10' src="../public/rank.png" alt="" />
        </div>
        <div class="circle3">
          <img className='w-40 absolute top-10 left-10' src="../public/xp.png" alt="" />
        </div>
        <div class="circle4">
          <img className='absolute bottom-10 left-10 w-40' src="https://robleet.com/assets/assets/drawer/fire.svg" alt="" />
        </div>
      </div>
      <div className='absolute top-0 w-full h-full flex justify-center items-center'>
        <img className='w-[20%]' src="../finallogo.png" alt="" />
      </div>
    </div>
  )
}

export default App
