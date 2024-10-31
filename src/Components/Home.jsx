import React from 'react'
import { dice } from '../Constant'
const Home = ({checkhome}) => {
  return (
    <div>
    <div className='flex text-center items-center flex-col my-10'>
    <h1 className='text-center mt-2 font-mono text-3xl'> welcome to the game  </h1>
      <img src={dice}  className='flex mx-auto mt-16 w-96' />

    
      <button  onClick={checkhome} class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      Start Game
</button>

      </div>
    </div>
  )
}

export default Home
