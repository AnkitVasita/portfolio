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
import Education from "../../components/Education/Education";

function Main() {
  return (
    <div>
      <Helmet>
        <title>Ankit Vasita - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
