import React from 'react'
import Cover from '../assets/cover.jpg'
import bannerText from '../assets/bannerText.svg' 

import pilates from '../assets/pilates.svg'
import aerobic from "../assets/aerobic.svg"
import crossfit from "../assets/crossfit.svg"
import midBanner from "../assets/midBanner.svg"
import motivation from "../assets/motivation.svg"
import Background from "../assets/Background.jpg"
import inspire from "../assets/inspire.svg"

type Props = {}

const buttonstyle = ``


const Home = (props: Props) => {
  return (
     <div>
        <div className='flex-col relative'>
          <div className='content-mbCover md:content-hero w-full md:px-[10%]'>
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

         {/* Upcoming classes */}
          <div className='flex-col items-center  text-center gap-[10px] md:flex-row md:px-[15%] mt-[15%] md:mt-[10%]'>
            <div className='md:flex justify-between'>

              <div className='flex-col space-y-5  gap-[10px]'>
                <h5 className='text-xl tracking-[0.4em] uppercase font-semibold text-[#524FF5] leading-[110%] '>OUR FITNESS TRAINING</h5>

                <h3 className='text-[#1C2129] font-bold text-[45px] leading-[110%]'>Upcoming Classes</h3>

              </div>


              <button className='my-5 bg-[#1D2229] px-[50px] pt-[19px] pb-[20px] leading-[26px] text-[22px] font-lato text-white rounded'>
                More Class
              </button>
            </div>

          </div>
    
    
        <div className='text-center  md:gap-[29px] md:flex md:text-left md:px-[15%] mt-5 '>
              {/* image group */}
              <div className='flex-col space-y-5 my-10'>
                <img src={pilates} />
                <h3 className='text-3xl leading-[110%] font-bold'>
                 Pilates Training
                 
                </h3>
                <p className='text-[22px] font-medium leading-[32px] capitalize text-[#6a6a6a] font-lato w-full'>
                 containing Lorem Ipsum passagesand more recently with
                </p>
                <p className='text-[#524ff5] text-[22px] leading-[26px] font-semibold font-lato '>
                  Read More
                  </p>
              </div>

              <div className='flex-col space-y-5 my-10'>
                <img src={aerobic} />
                <h3 className='text-3xl leading-[110%] font-bold'>
                 Pilates Training
                 
                </h3>
                <p className='text-[22px] font-medium leading-[32px] capitalize text-[#6a6a6a] font-lato w-full'>
                 containing Lorem Ipsum passagesand more recently with
                </p>
                <p className='text-[#524ff5] text-[22px] leading-[26px] font-semibold font-lato '>
                  Read More
                  </p>
              </div>

              <div className='flex-col space-y-5 my-10'>
                <img src={crossfit} />
                <h3 className='text-3xl leading-[110%] font-bold'>
                 Pilates Training
                 
                </h3>
                <p className='text-[22px] font-medium leading-[32px] capitalize text-[#6a6a6a] font-lato w-full'>
                 containing Lorem Ipsum passagesand more recently with
                </p>
                <p className='text-[#524ff5] text-[22px] leading-[26px] font-semibold font-lato '>
                  Read More
                  </p>
              </div>


            </div>


            <div className='my-10'>
             <img src={midBanner} />
            </div>


             {/* About */}
            <div className='items-center md:flex  md:space-x-[5%] md:px-[15%]'>
              {/* left side */}
              <div className=''>
                <div className='w-full'>
                <h6 className='text-[#524FF5] text-xl uppercase font-semibold leading-[22px]'>About</h6>
                 <p className='text-[#1b2129] text-[45px] leading-[50px] font-bold mt-5'>Respect Your Body, It’s the Only One You Get</p>
                 <p className='mt-10 text-xl leading-[29px] capitalize text-[#6a6a6a] font-medium font-lato'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. point of using Lorem Ipsum is

                 </p>  
                </div>


                <div className='md:flex md:items-center md:justify-around bg-[#f0f0f0] mt-10 py-5 w-full'>
                  <div className='mx-[5%]'>
                    <h3 className='text-[#1b2129] text-3xl font-bold leading-[33px] '>Motivation</h3>
                     
                     <p className='text-xl leading-[29px] capitalize font-medium text-[#6a6a6a] font-lato '>
                      It is a long established fact that a reader will be distracted
                     </p>
                  </div>

                   <div className='px-[5%] w-full'>
                    <img  src={motivation} />
                   </div>
                 

                </div>


                <div className='md:flex md:justify-around bg-[#f0f0f0] mt-10 py-5'>
                  

                   <div className='px-[5%] w-full'>
                    <img src={inspire} />
                   </div>

                   <div className='px-[5%] w-full'>
                    <h3 className='text-[#1b2129] text-3xl font-bold leading-[33px] '> Inspire</h3>
                     
                     <p className='text-xl leading-[29px] capitalize font-medium text-[#6a6a6a] font-lato'>
                   will be distracted by readable content using Lorem Ipsum                      </p>
                  </div>
                 

                </div>
                
              </div>

              {/* right side */}
              <div className='w-full'>
               <img className='w-full' src={Background} alt="bakcground" /> 
              </div>

            </div>


               

         


         
        </div>
        
    
  )
}

export default Home