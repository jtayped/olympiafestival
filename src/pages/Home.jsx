// React util
import React from "react";

// Containers
import { Hero, Sponsors, Buy, Contact, Header } from "../containers";

const Home = () => {
  return (
    <div className="text-text font-primary">
      <Header />
      <Hero />
      <Sponsors />
      <Buy />
      <Contact />
    </div>
  );
};

export default Home;
