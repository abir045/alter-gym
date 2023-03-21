import { Link } from "react-router-dom"
import Logo from '../assets/LOGO.svg'
import WhiteLogo from '../assets/whiteLogo.svg'

type Props = {}

const Navbar = (props: Props) => {
  return (
    
     <div className='flex w-full  justify-between  h-[58px] items-center bg-[#1f1f1f] text-[#fbfbfb] uppercase font-medium leading-[21px] '>
       <img className="mx-[3%]"  src={WhiteLogo} alt="logo" />
       
       <ul className="flex space-x-5 justify-between  ">
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="/locations">Locations</Link>
        </li>
        <li>
         <Link to="/aboutus">About Us</Link>
        </li>
        <li>
         <Link to="/Service">Service</Link>
        </li>
        <li>
         <Link to="/contactus">Contact Us</Link>
        </li>

       </ul>
       <div className="flex  space-x-3 mx-5" >
          <button className=" bg-[#fbfbfb] text-[#1f1f1f] p-3 rounded uppercase">
           Free Trial
          </button>

          <button className=" bg-[#fbfbfb] text-[#1f1f1f] p-3 rounded uppercase"> 
           Join
          </button>

       </div>
     
     </div>

     
  )
}

export default Navbar