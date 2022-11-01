import React, { useState, useEffect } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {animateScroll as scroll, Link as LinkS} from "react-scroll";

function Nav({toggle, isOpen}) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 60) {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
    console.log(`isOpen: ${isOpen} / needs to be implemented still`);
    console.log(`scrollNav: ${scrollNav} / needs to be implemented still`);
  }

  return (
    <nav className="nav-desktop">
      <h1 onClick={toggleHome} >Robert Petersen</h1>
      <div className="nav-mobile-icon-container" onClick={ toggle } >
        <FaBars className="bars icon"/>
        <FaTimes className="times icon"/>
      </div>
      <div className="nav-links-conatiner">
        <LinkS 
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >About</LinkS>
        <LinkS 
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Skills</LinkS>
        <LinkS 
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Projects</LinkS>
      </div>
    </nav>
  );
}

export default Nav;