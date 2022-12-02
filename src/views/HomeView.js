import React, { useState } from "react";

import Nav from "../components/nav/Nav";
import MobileNav from "../components/mobileNav/MobileNav";
import Landing from "../components/landing/Landing.js";
import About from "../components/about/About";

function HomeView() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section>
      <Nav isOpen={isOpen} toggle={toggle} />
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Landing />
      <About />
    </section>
  );
}

export default HomeView;