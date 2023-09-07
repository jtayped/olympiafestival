// React util
import React from "react";

// Containers
import { Hero, Sponsors, Buy } from "../containers";

const Home = () => {
  return (
    <div className="text-text font-primary">
      <Hero />
      <Sponsors />
      <Buy />
    </div>
  );
};

export default Home;
