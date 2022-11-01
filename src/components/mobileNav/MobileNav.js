import React from 'react';
import { Link as LinkS } from "react-scroll";

const MobileNav = ({ isOpen, toggle }) => {
  return (
    <nav className='nav-mobile'>
      <LinkS 
        to="about" 
        onClick={toggle} 
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-60}
      >About</LinkS>
      <LinkS 
        to="skills" 
        onClick={toggle} 
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-60}
      >Skills</LinkS>
      <LinkS 
        to="projects" 
        onClick={toggle} 
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-60}
      >Projects</LinkS>
    </nav>
  )
}

export default MobileNav;