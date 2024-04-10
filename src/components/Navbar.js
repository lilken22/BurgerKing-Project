import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdLocationPin, MdShoppingBag } from "react-icons/md";
import logo from "../Images/kingburger.jpg";
import More from "../components/More";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [displayMore, setDisplayMore] = useState(false);

  return (
    <header className={` bg-[rgb(245,235,220)] flex items-center justify-between w-100% h-[80px] text-[rgb(43,2,0)] md:flex fixed w-full top-0 left-0 font-serif sm:px-12 lg:px-36" `}>
      <nav>
      <ul className="items-center  justify-between font-extrabold text-lg md:flex p-50">
      {/* Logo */}
      <div className="text-1xl pr-3">
        <FaBars onClick={() => setDisplayMore(!displayMore)} />
      </div>

      {/* Navigation */}
      {/* <nav className="hidden sm:flex items-center space-x-8"> */}
      <div className=" lg:flex items-center space-x-2 hidden sm:grid-cols-3">
       <li className="text-lg font-semibold hover:text-[rgb(214,35,0)]"><Link to="/order" >
          Order
        </Link></li>
        <li className="text-lg font-semibold hover:text-[rgb(214,35,0)]"><Link to="/offers" >
          Offers
        </Link></li>
         <li className="text-lg font-semibold hover:text-[rgb(214,35,0)]"><Link to="/delivery" >
          Delivery
        </Link></li>
         <li className="text-lg font-semibold hover:text-[rgb(214,35,0)]"><Link to="/menu" >
          Menu
        </Link></li>
        <li className="text-lg font-semibold hover:text-[rgb(214,35,0)] cursor-pointer" onClick={() => setDisplayMore(true)}> More 
        </li>
        </div>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="w-[50px] h-[50px]  border-none lg:ml-[180px] sm:flex flex-grow-0 justify-center" >
      <Link to="./"><img src={logo} alt="Logo" className="" /></Link>
      </div>
     
      {/* Utility Links */}
      <div className="flex items-center gap-6 mr-10">
        <div className="hidden sm:flex items-center  gap-2 text-amber-950 font-black">
          <MdLocationPin className="text-xl font-extrabold" />
          <Link className="text-lg">For item availability</Link>
          <Link to="#" className="text-sm font-medium underline gap-1">
            Choose your location
          </Link>
        </div>
        <div className="flex items-center gap-4 text-[rgb(43,2,0)]">
        <button className="bg-[rgb(214,35,0)] text-white px-4 py-2 rounded-[50px] text-sm font-bold hover:bg-[rgb(241,187,86)]">
          Sign Up
        </button>
        <div className="hidden sm:flex items-center space-x-2">
          <button className="flex items-center gap-2 px-5 py-1 bg-[rgb(43,2,0)] rounded-[50px] text-white font-bold hover:bg-[rgb(179,255,0)]">
          <MdShoppingBag />
          <span>£0.00</span>
          </button>
        </div>
        </div>
      </div>

      {/* More dropdown */}
      {displayMore && <More setDisplayMore={setDisplayMore} />}
    </header>
  );
}




