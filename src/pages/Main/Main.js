import React from "react";
import { Helmet } from "react-helmet";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
// import { headerData } from "../../data/headerData";

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
      {/* <Achievement /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <Blog /> */}
    </div>
  );
}

export default Main;
