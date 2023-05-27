import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ShopprLogo from "/shoppr-logo.png";

export default function Header() {
  const { totalItems } = useSelector((state) => state.shoppingCart);
  return (
    <Navbar
      className="shadow-sm p-4 text-white navbar-dark"
      style={{ backgroundColor: "#415257" }}
    >
      <Container className="p-0">
        <div
          className="d-flex gap-2 gap-sm-4 align-items-center flex-column flex-sm-row m-auto"
          style={{ width: "100%" }}
        >
          <Nav.Link as={NavLink} to="/">
            <img src={ShopprLogo} alt="" width="100px" />
          </Nav.Link>
          <Nav
            className="flex align-items-center justify-content-evenly gap-4 gap-sm-5 justify-content-sm-start"
            style={{ width: "100%" }}
          >
            <Nav.Link className="p-0 fs-5" as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="p-0 fs-5" as={NavLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} className="p-0 fs-5" to="/about">
              About
            </Nav.Link>
            <NavLink
              as={NavLink}
              to="/basket"
              className="d-sm-none position-relative"
            >
              <FontAwesomeIcon icon={faCartShopping} color="white" />
              {totalItems === 0 ? (
                <></>
              ) : (
                <div
                  className="rounded-circle d-flex justify-content-center align-items-center text-light"
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    position: "absolute",
                    bottom: "-10px",
                    right: "-15px",
                    backgroundColor: "#7c959c",
                  }}
                >
                  {totalItems}
                </div>
              )}
            </NavLink>
          </Nav>
        </div>
        <NavLink
          as={NavLink}
          to="/basket"
          className="d-none d-sm-block position-relative"
        >
          <FontAwesomeIcon icon={faCartShopping} color="white" size="xl" />
          {totalItems === 0 ? (
            <></>
          ) : (
            <div
              className="rounded-circle d-flex justify-content-center align-items-center text-light"
              style={{
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: "-10px",
                right: "-15px",
                backgroundColor: "#7c959c",
              }}
            >
              {totalItems}
            </div>
          )}
        </NavLink>
      </Container>
    </Navbar>
  );
}
