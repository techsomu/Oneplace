import { Hero } from "@/components/hero";
import MenuBar from "@/pages/Menubar";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="headerdiv"></div>
      <MenuBar />
      <Hero />
    </>
  );
};

export default Home;
