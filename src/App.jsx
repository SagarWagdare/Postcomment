import { Route, Routes } from "react-router";
import "./App.css";
import Post from "./Post";
import AddPostForm from "./AddPostForm";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/addpost" element={<AddPostForm />} />
      </Routes>
    </>
  );
}

export default App;
