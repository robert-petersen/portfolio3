import React, { useState } from "react";

import Nav from "../components/nav/Nav";
import MobileNav from "../components/mobileNav/MobileNav";
import Landing from "../components/landing/Landing.js";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

function DefaultView() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header>
        <Nav isOpen={isOpen} toggle={toggle} />
        <MobileNav isOpen={isOpen} toggle={toggle} />
        <Landing />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default DefaultView;