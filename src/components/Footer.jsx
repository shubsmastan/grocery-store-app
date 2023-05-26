import reactLogo from "/images/react.png";
import githubLogo from "/images/github.png";

export default function Footer() {
  return (
    <footer
      className="text-light d-flex gap-1 justify-content-center flex-column flex-sm-row align-items-center p-4"
      style={{ backgroundColor: "#415257" }}
    >
      <p className="mb-0">
        Made using{" "}
        <a className="link-light" href="https://react.dev/" target="_blank">
          React
        </a>
        &nbsp;
        <a href="https://react.dev/" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        </a>
      </p>
      <p className="mb-0">
        by{" "}
        <a
          className="link-light "
          href="https://www.github.com/shubsmastan"
          target="_blank"
        >
          ShubsMastan
        </a>{" "}
        &nbsp;
        <a href="https://www.github.com/shubsmastan" target="_blank">
          <img
            src={githubLogo}
            alt="GitHub logo"
            style={{ height: "1.5rem", width: "1.5rem" }}
          />
        </a>
      </p>
    </footer>
  );
}
