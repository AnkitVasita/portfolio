import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Contacts,
  Projects,
  Skill,
} from "../../components";

function Main() {
  return (
    <div>
      <Helmet>
        <title>Ankit Vasita - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Skill />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
