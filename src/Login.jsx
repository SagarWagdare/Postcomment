import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoginImg from "./assets/6343825.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.message);
        toast.success("Login Successfull", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        setTimeout(() => {
          navigate("/posts");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <>
      <NavLink to="/posts" className="text-decoration-none">
        <div className="mx-3" style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Home Page
        </div>
      </NavLink>
      <Container className="mt-5">
        <Row>
          <Col>
            <img src={LoginImg} alt="" style={{ width: "500px" }} />
          </Col>
          <Col className="" style={{ marginTop: "70px" }}>
            <Card
              className="p-5 shadow border-0 "
              style={{ background: "#AACBFF" }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h6>Enter Email</h6>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <h6> Password</h6>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="light" type="submit" onClick={handleLogin}>
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        limit={1}
      />
    </>
  );
};

export default Login;
