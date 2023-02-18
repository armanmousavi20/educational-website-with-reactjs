import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useLocation } from "react-router-dom"


const Header = () => {
    const location = useLocation()
    const [click, setClick] = useState(false)

  return (
    <div className="container">
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/' className = {location.pathname.split("/")[1] === '' ? "activePage" : "" }>
                  Home
              </Link>
            </li>
            <li>
              <Link to='/courses' className = {location.pathname.split("/")[1] === 'courses' ? "activePage" : "" }>
                 All Courses
               </Link>
            </li>
            <li>
              <Link to='/about' className = {location.pathname.split("/")[1] === 'about' ? "activePage" : "" }>
                  About
               </Link>
            </li>
            <li>
              <Link to='/team' className = {location.pathname.split("/")[1] === 'team' ? "activePage" : "" }>
                   Team
               </Link>
            </li>
            <li>
              <Link to='/pricing' className = {location.pathname.split("/")[1] === 'pricing' ? "activePage" : "" }>
                  Pricing
               </Link>
            </li>
            <li>
              <Link to='/journal' className = {location.pathname.split("/")[1] === 'journal' ? "activePage" : "" }>
                   Journal
              </Link>
            </li>
            <li>
              <Link to='/contact' className = {location.pathname.split("/")[1] === 'contact' ? "activePage" : "" }>
                    Contact
              </Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
