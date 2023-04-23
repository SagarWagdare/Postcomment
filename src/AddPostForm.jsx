import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdd } from "./redux/postSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { dataRef } from "./Firebase";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState(" ");
  const [content, setContent] = useState("");
  // const [liked, setLiked] = useState("");
  // console.log(allData);
  console.log(content);
  //   console.log(name);
  console.log(title);

  const handleAddPost = () => {
    if (title && content) {
      const PostData = { name, title, content };

      dataRef.ref().child("Posts").push(PostData);

      setName("");
      setTitle("");
      setContent("");
      toast.success("Post Added", {
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
    } else {
      toast.info("Please add  Title and Content", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Header />
      <NavLink to="/posts" className="text-decoration-none">
        <div className="m-2" style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-arrow-left"></i> Back to main Page
        </div>
      </NavLink>
      <div className="container ">
        <h2 className="text-center fw-bold">Post Something!</h2>

        <Card className="mx-auto shadow">
          <Form className="m-3">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h6>Author</h6>
              <Form.Control
                type="text"
                placeholder="Enter Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h6>Post Title</h6>
              <Form.Control
                type="text"
                placeholder="Enter post title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <h6> Post Content</h6>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Enter content..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                style={{ width: "300px" }}
                onClick={handleAddPost}
              >
                Add Post
              </Button>
            </div>
          </Form>
        </Card>
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
      </div>
    </>
  );
};

export default AddPostForm;
