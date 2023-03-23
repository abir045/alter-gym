import { Link } from "react-router-dom"
import Logo from '../assets/LOGO.svg'
import WhiteLogo from '../assets/whiteLogo.svg'

type Props = {}

const Navbar = (props: Props) => {
  return (
    
     <div className='hidden md:flex w-full  justify-around  h-[65px] items-center my-10'>
      <div className="flex items-center">
      <img className="mx-[3%]"  src={Logo} alt="logo" />
       <span className="text-[30px] leading-9 font-extrabold text-[#1D2229]" >Strengthy</span>
      </div>
       
       
       <ul className="flex space-x-5 items-center justify-between  text-xl leading-6 font-semibold font-lato">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/about">About</Link>
        </li>
        <li>
         <Link to="/classes">Classes</Link>
        </li>
        <li>
         <Link to="/trainers">Trainers</Link>
        </li>
        <li>
         <Link to="/contact">Contact</Link>
        </li>

        <li>
          <button className=" bg-[#f2f2f2] text-[#1D2229] px-[51px] pt-[19px] pb-[20px] text-[22px] leading-[26px] rounded ">
           Book Class
          </button>
        </li>

       </ul>       
     
     </div>

     
  )
}

export default Navbar