import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { totalItems } = useSelector((state) => state.shoppingCart);
  return (
    <Navbar
      className="shadow-sm mb-3 p-4 text-white navbar-dark"
      style={{ backgroundColor: "#415257" }}
    >
      <Container>
        <div className="d-flex gap-4 align-items-center flex-column flex-sm-row">
          <Nav.Link as={NavLink} to="/">
            <h1
              className="mb-0 font-weight-bold"
              style={{ fontFamily: "'Tilt Prism', sans-serif" }}
            >
              Shoppr
            </h1>
          </Nav.Link>
          <Nav>
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

        <NavLink as={NavLink} to="/basket">
          <Button
            variant="outline-info"
            className="basket"
            style={{
              width: "3.5rem",
              height: "3.5rem",
              border: "none",
              position: "relative",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
            {totalItems === 0 ? (
              <></>
            ) : (
              <div
                className="rounded-circle d-flex justify-content-center align-items-center text-light"
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  position: "absolute",
                  bottom: "3px",
                  right: "3px",
                  backgroundColor: "#7c959c",
                }}
              >
                {totalItems}
              </div>
            )}
          </Button>
        </NavLink>
      </Container>
    </Navbar>
  );
}
