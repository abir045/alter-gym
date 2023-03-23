import React from 'react'
import Cover from '../assets/cover.jpg'
import bannerText from '../assets/bannerText.svg' 

type Props = {}

const textstyle = ``


const Home = (props: Props) => {
  return (
     <div>
        <div className='flex-col relative'>
          <div className='content-mbCover md:content-hero w-full '>
           </div>

          <div className='z-[10] absolute top-1/3  md:absolute md:top-1/2  md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 '>
          
          

           <img   src={bannerText} />

          <div className='flex-col space-y-5 items-center text-center mt-10 md:flex-row md:text-center md:space-x-3'>
           <button className='px-[50px] pt-[19px] pb-[20px]  bg-[#a1f65e]  text-[22px] leading-[26px] font-semibold rounded font-lato'>
            Start Today
          </button>
          <button className='  text-[#ffffff] border-2 border-solid border-[#FFFFFF]  px-[50px] pt-[19px] pb-[20px]  bg-transparent  text-[22px] leading-[26px] font-semibold rounded font-lato'>
            About Me
          </button>
          </div>

          
          </div>          
          
         </div>

         {/* location */}
         

               

         


         
        </div>
        
    
  )
}

export default Home