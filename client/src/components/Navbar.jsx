import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                <Link to="/home">
                    AUTOMATE
                </Link>
            </h1>
            <ul className="hidden md:flex">
                <li className="p-4">
                    <Link to="/home">Home</Link>
                </li>
                <li className="p-4">Company</li>
                <li className="p-4">
                    <Link to='/services'>
                        Services
                    </Link>
                </li>
                <li className="p-4">
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li className="p-4">Contact</li>
            </ul>   
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 widtd-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500" : 'fixed left-[-100%] ease-in-out duration-500'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                    AUTOMATE
                </h1>
                <ul className="p-4 uppercase">
                <li className="p-4 border-b border-gray-600" href='/home'>Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resoucres</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;