import React from "react";
import Header from "./Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import PostImg from "./assets/5296790.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <div
              style={{
                backgroundColor: "#1273EB",
                width: "500px",
                height: "100%",
                boxShadow: "1px 1px  black",
                borderRadius: "10px 100px",
              }}
            >
              <h4
                className="text-light px-3 pt-3"
                style={{ textShadow: "1px 1px  lightgrey" }}
              >
                {" "}
                TalkThread
              </h4>
              <h2
                className="fw-bold text-light px-3 "
                style={{ textShadow: "1px 1px  black" }}
              >
                Join the conversation with our comment Post app
              </h2>
              <p className="text-light fw-semibold px-3 ">
                Welcome to our comment Post app! We provide a platform where you
                can engage with your favorite content, share your thoughts, and
                join the conversation with a community of like-minded
                individuals.
                <br />
                <br />
                Our app allows you to easily post comments, and like or dislike
                comments. Our user-friendly interface makes it easy to navigate
                and find the content you're interested in.
                <br />
                <br />
                Join our community today and start sharing your thoughts with
                the world!
              </p>
              <NavLink to="./Signup">
                <Button
                  variant="dark"
                  className="mt-5 fw-semibold"
                  style={{
                    position: "absolute",
                    bottom: "150px",
                    left: "460px",
                  }}
                >
                  Let's Get started
                </Button>
              </NavLink>
            </div>
          </Col>
          <Col>
            <img
              src={PostImg}
              alt=""
              style={{ width: "500px", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
