import React from "react";
import { Helmet } from "react-helmet";
import { About, Landing, Navbar } from "../../components";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ankit Vasita - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      {/* <About /> */}
    </div>
  );
};

export default Home;
