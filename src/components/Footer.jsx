import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      className="d-flex gap-2 justify-content-center align-items-center p-1"
      style={{ fontSize: "12px" }}
    >
      <p className="mb-0">
        &copy; 2023{" "}
        <a className="link-secondary" href="https://mastan.me">
          ShubsMastan
        </a>
      </p>
      <FontAwesomeIcon icon={faCircle} width="4px" />
      <FontAwesomeIcon icon={faGithub} size="lg" />
      <p className="mb-0">
        <a className="link-secondary" href="https://github.com/shubsmastan">
          GitHub
        </a>
      </p>
      <FontAwesomeIcon icon={faCircle} width="4px" />
      <FontAwesomeIcon icon={faReact} size="lg" />
      <p className="mb-0">
        <a className="link-secondary" href="https://react.dev">
          React
        </a>
      </p>
    </footer>
  );
}
