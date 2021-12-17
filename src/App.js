import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserDetailed from "./components/UserDetailed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:Id" element={<UserDetailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
