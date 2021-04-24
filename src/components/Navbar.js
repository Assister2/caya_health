import React,{useState} from 'react'
import { Link } from "gatsby"
import { GoThreeBars } from "react-icons/go"
import {StaticImage} from 'gatsby-plugin-image'

const Navbar = () => {
  const [show,setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <StaticImage
              src="../assets/images/logo-smaller.png"
              alt="caya logo"
            />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <GoThreeBars />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            Services
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(false)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
