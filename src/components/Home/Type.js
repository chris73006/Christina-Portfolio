import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
           "Aspiring Data Analyst",
           "Python & SQL Learner",
           "Data Visualization Enthusiast",
           "Machine Learning Beginner"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
