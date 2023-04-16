import React from "react";
import ReactLogo from "../images/react.png";
import GitHubLogo from "../images/github.png";

export default function Footer() {
  return (
    <footer className="App-footer">
      <p className="App-footer-text">
        Made using{" "}
        <a className="App-link" href="https://react.dev/">
          React
        </a>
      </p>
      <a href="https://react.dev/">
        <img className="App-logo" src={ReactLogo} alt="React logo" />
      </a>
      <a className="App-link" href="https://www.github.com/shubsmastan">
        <img className="App-logo" src={GitHubLogo} alt="GitHub logo" />
      </a>
      <p className="App-footer-text">
        by{" "}
        <a className="App-link" href="https://www.github.com/shubsmastan">
          ShubsMastan
        </a>
      </p>
    </footer>
  );
}
