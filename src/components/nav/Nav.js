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
  }

  return (
    <nav className={scrollNav ? "nav" : "nav hide"}>
      <h1 onClick={toggleHome} >Robert Petersen</h1>
      <div className="nav_mobile_icon_container" onClick={ toggle } >
        <FaBars 
          className={isOpen ? "icon hide_icon" : "icon"}
          onClick={toggle}
        />
        <FaTimes 
          className={isOpen ? "icon" : "icon hide_icon"}
          onClick={toggle}
        />
      </div>
      <div className="nav_links_conatiner">
        <LinkS 
          className="link"
          to="about"
          smooth={"true"}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >About</LinkS>
        <LinkS 
          className="link"
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Skills</LinkS>
        <LinkS 
          className="link"
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