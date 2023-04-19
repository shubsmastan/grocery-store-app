import React from "react";
import reactLogo from "../images/react.png";
import githubLogo from "../images/github.png";

export default function Footer() {
  return (
    <footer>
      <p>
        Made using{" "}
        <a className="App-link" href="https://react.dev/" target="_blank">
          React
        </a>
        &nbsp;
        <a href="https://react.dev/" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </p>
      <p>
        by{" "}
        <a href="https://www.github.com/shubsmastan" target="_blank">
          ShubsMastan
        </a>{" "}
        &nbsp;
        <a href="https://www.github.com/shubsmastan" target="_blank">
          <img src={githubLogo} alt="GitHub logo" />
        </a>
      </p>
    </footer>
  );
}
