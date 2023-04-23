import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";
import { useEffect, useState } from "react";
import { postAdd } from "./redux/postSlice";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { dataRef } from "./Firebase";

const Post = () => {
  const dispatch = useDispatch();
  const Post = useSelector((state) => state.Post);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    dataRef
      .ref()
      .child("Posts")
      .on("value", (data) => {
        const getData = Object(data.val());
        dispatch(postAdd(getData));
        setAllData(getData);
      });
  }, []);

  console.log("This is all Data", allData);

  console.log("Post", Post);
  return (
    <>
      <Header />
      {/* <AddPostForm /> */}
      {/* <Container> */}
      <div className=" mt-5 mx-5">
        {Object.values(allData).map((post, index) => (
          <Card
            key={index}
            className=" text-center  shadow my-3 mx-auto"
            style={{
              width: "60%",
            }}
          >
            <h4>{post.title}</h4>
            <p className="mx-3 fw-semibold">{post.content}</p>

            <div className="d-flex mx-4 my-2" style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-thumbs-up text-primary mx-2">
                {" "}
                <span className="mx-1">0</span>{" "}
              </i>
              <i className="fa-solid fa-thumbs-down text-primary mx-2">
                <span className="mx-1">0</span>{" "}
              </i>
              <i className="fa-regular fa-bookmark mx-2"></i>
            </div>
            <span className="t text-end mx-2 fw-bold">
              {" "}
              <span className="fw-lighter">~by</span>
              {post.name}
            </span>
          </Card>
        ))}

        <NavLink to="/addpost" className="text-decoration-none">
          <Button
            className="d-flex mx-auto border-secondary my-4 bg-light text-dark fw-bold"
            style={{ position: "relative", left: "340px" }}
          >
            {" "}
            + Create a New Post{" "}
          </Button>
        </NavLink>
      </div>
      {/* <Card
            className="shadow border-0 "
            style={{
              width: "30%",
              height: "100%",
              position: "fixed",
              marginTop: "-7px",
              borderRadius: "0px",
              background: "#0A66C2",
            }}
          >
           
            <p className="text-center text-light fw-bold">Create</p>
            <span>
              {" "}
              <Button>+ Create a New Post </Button>
            </span>
            <span>
              {" "}
              <Button className="bg-light text-dark">
                Saved Post <i className="fa-regular fa-bookmark mx-2"></i>
              </Button>
            </span>
          </Card> */}
    </>
  );
};

export default Post;
