// React util
import React from "react";

// Containers
import { Hero, Sponsors, Buy, Contact } from "../containers";

const Home = () => {
  return (
    <div className="text-text font-primary">
      <Hero />
      <Sponsors />
      <Buy />
      <Contact />
    </div>
  );
};

export default Home;
