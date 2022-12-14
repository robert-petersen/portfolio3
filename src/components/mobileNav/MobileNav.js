import React from 'react';
import { Link as LinkS } from "react-scroll";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <nav className={isOpen ? "nav_mobile" : "nav_mobile hide_mobile_nav"}>
      <ul className='nav_links_container'>
        <li>
          <LinkS 
            className="link"
            to="about" 
            onClick={toggle} 
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >About</LinkS>
        </li>
        <li>
          <LinkS 
            className="link"
            to="skills" 
            onClick={toggle} 
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >Skills</LinkS>
        </li>
        <li>
          <LinkS 
            className="link"
            to="projects" 
            onClick={toggle} 
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >Projects</LinkS>
        </li>
        <li>
          <LinkS 
            className="link"
            to="contact"
            onClick={toggle} 
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
          >Contact</LinkS>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNav;