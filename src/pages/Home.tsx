import React from 'react'
import Cover from '../assets/cover.jpg'

type Props = {}

const textstyle = ``


const Home = (props: Props) => {
  return (
     <div>
        <div className='flex-col relative'>
          <div className='before:absolute before:z-[-1]  before:content-hero'>
         
           
           <h1 className='pt-[30%] text-center  text-7xl text-white leading-[84px] font-bold drop-shadow-3xl w-full'> 
           <span className='text-[#FF5E0E]'>HARD</span>  WORK, <span className='text-[#FF5E0E]'>HARD</span>  GAIN </h1>
    

            </div>
            

          </div>
        </div>
        
    
  )
}

export default Home