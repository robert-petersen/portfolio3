import React, { useState } from "react";

import Nav from "../components/nav/Nav";
import MobileNav from "../components/mobileNav/"

function HomeView() {
  return (
    <section>
      <Nav />
      <MobileNav />
    </section>
  );
}

export default HomeView;