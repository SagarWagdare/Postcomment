import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" style={{ background: "#0A66C2" }}>
        <Container fluid>
          <h4
            className="text-light"
            style={{ textShadow: "1px 1px  lightgrey" }}
          >
            {" "}
            <b className="text-dark">T</b>
            alk<b className="text-dark">T</b>hread
          </h4>
          <div>
            <NavLink to="/login">
              <Button variant="light" className="mx-2  fw-bold">
                LogIn
              </Button>
            </NavLink>

            <NavLink to="/signup">
              <Button variant="primary" className=" fw-bold">
                SignUp
              </Button>
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
