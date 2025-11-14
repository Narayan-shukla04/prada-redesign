import React from 'react'
import { CiUser ,CiSearch,CiMenuBurger   } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center h-[90px] w-full p-[50px] ">

            <div className="flex font-semibold text-[19px] cursor-pointer">Pradasphere</div>
           
            <div><img className="h-[180px] w-[260px]"
             src="https://cdn.freebiesupply.com/logos/thumbs/2x/prada-logo.png" alt="" /></div>
           
           
            <div className="flex gap-[30px] text-[30px]">
                <div className='cursor-pointer'><SlHandbag /></div>
                <div className='cursor-pointer'><CiUser /></div>
                <div className='cursor-pointer'>  <CiSearch /> </div>
                <div className='cursor-pointer'><CiMenuBurger /></div>
            </div>

        </div>
    )
}

export default Navbar