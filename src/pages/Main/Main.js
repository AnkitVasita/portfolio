import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Education,
  Contacts,
  Projects,
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
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
