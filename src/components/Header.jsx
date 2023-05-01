import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      className="shadow-sm mb-3 p-4"
      style={{ backgroundColor: "#B0DAFF" }}
    >
      <Container>
        <div className="d-flex gap-4 align-items-center flex-column flex-sm-row">
          <Nav.Link as={NavLink} to="/">
            <h1
              className="mb-0 font-weight-bold"
              style={{ fontFamily: "'Rubik Mono One', sans-serif" }}
            >
              Shoppr
            </h1>
          </Nav.Link>
          <Nav variant="tabs">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </div>
        <Button
          variant="outline-info"
          className="basket"
          style={{
            width: "3.5rem",
            height: "3.5rem",
            border: "none",
            position: "relative",
          }}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <defs></defs>
            <title>cart-outline</title>
            <path
              className="cls-1"
              d="M512,204.69a51.27,51.27,0,0,0-51.2-51.22H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H51.2a51.21,51.21,0,0,0-24.55,96.15L66.76,450.23A77,77,0,0,0,142.07,512H369.93a77,77,0,0,0,75.31-61.76l40.11-200.62A51.26,51.26,0,0,0,512,204.69ZM242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47h-271ZM51.2,179.08H460.8a25.61,25.61,0,0,1,0,51.22H51.2a25.61,25.61,0,0,1,0-51.22ZM420.14,445.22a51.34,51.34,0,0,1-50.21,41.17H142.07a51.34,51.34,0,0,1-50.21-41.18L54,255.91H458ZM243.2,409.56V332.74a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0V332.74a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm128,0V332.74a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Z"
            />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-light"
            style={{
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              bottom: "3px",
              right: "3px",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  );
}