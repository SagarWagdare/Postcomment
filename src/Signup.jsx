import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SignupImg from "./assets/Data_security_05.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const Signup = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        console.log(res);
        const user = res.user;
        await updateProfile(user, {
          displayName: name,
        });
        toast.success("Registration Successfull", {
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
        // console.log(err.message);
        // setValue(err.message);
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
            <img src={SignupImg} alt="" style={{ width: "500px" }} />
          </Col>
          <Col className="" style={{ marginTop: "70px" }}>
            <Card
              className="p-5 shadow border-0 "
              style={{ background: "#AADFFF" }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <h6>UserName</h6>
                  <Form.Control
                    type="name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h6>Enter Email</h6>
                  <Form.Control
                    type="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <h6> Password</h6>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button variant="light" type="submit" onClick={handleSubmit}>
                  Register
                </Button>
                <p>{value}</p>
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

export default Signup;
