import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Posts from "./pages/posts/Posts";
import Comments from "./pages/comments/Comments";
import Albums from "./pages/albums/Albums";
import Todos from "./pages/todos/todos";
import Users from "./pages/users/Users";
import Layout from "./pages/layout/Layout";
import NotFound from "./pages/not-found/NotFound";
import Login from "./pages/login/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
