import React from 'react'
import "./Nav.css"
import logo from "../../assets/p.jpg"

function Nav() {
  return (
    <div id='Nav'>
        <div className="nav1">
            <div class="logo">
                <img src={logo} alt="" width="50px"/>
                <h1>Private property rental</h1>
            </div>
        </div>
        <div className="nav2"></div>
    </div>
  )
}

export default Nav