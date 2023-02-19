import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Blog from "./Blog";
import Learn from "./Learn";
import Teach from "./Teach";
import Error from "./Error";
import { Route, Routes } from "react-router-dom";

// https://welearn-d70ba-default-rtdb.firebaseio.com/
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
