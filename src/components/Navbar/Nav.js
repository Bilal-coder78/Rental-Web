import React from 'react'
import "./Nav.css"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/p.jpg"

function Nav() {
  return (
    <div id='Nav'>
        <div className="nav1">
            <div className="logo">
                <img src={logo} alt="" width="50px"/>
                <h1>Private property rental</h1>
            </div>
            <div className="Search">
                <input type="text" placeholder='Search destination'/>
                <button>Search<CiSearch /></button>
            </div>
            <div className="ham">
                <button className='btn1'>List Your Home</button>
                <button className='btn2'>
                <GiHamburgerMenu id='svg1'/>
                <CgProfile id='svg2'/>
                </button>
            </div>
        </div>
        <div className="nav2">
            
        </div>
    </div>
  )
}

export default Nav