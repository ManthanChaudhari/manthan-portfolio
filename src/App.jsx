import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Skill from "./Components/Skill";
import { motion } from "framer-motion";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <div>
        <Header />
        <motion.div
          className="px-5 py-5 flex flex-col gap-y-10"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Intro />
          <h1 className="text-center text-3xl font-bold ">{"<Skills/>"}</h1>
          <Skill />
          <h1 className="text-center text-3xl font-bold ">{"<Projects/>"}</h1>
          <Projects />
        </motion.div>
      </div>
    </>
  );
}

export default App;
