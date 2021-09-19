import React from "react";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>
        React ui lib by{" "}
        <a
          href="https://github.com/viniciussslima"
          target="_blank"
          rel="noreferrer"
        >
          Vinicius Santos
        </a>
        .
      </p>
      <p>
        Made just for learning purposes, to use go to{" "}
        <Link to="/install">How to instal</Link> section.
      </p>
    </>
  );
};

export default About;
