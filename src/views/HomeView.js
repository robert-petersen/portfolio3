import React, { useState } from "react";

import Nav from "../components/nav/Nav";
import MobileNav from "../components/mobileNav/MobileNav";
import Landing from "../components/landing/Landing.js";

function HomeView() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(`toggled value is ${isOpen}`)
  }

  return (
    <section>
      <Nav isOpen={isOpen} toggle={toggle} />
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Landing />
    </section>
  );
}

export default HomeView;