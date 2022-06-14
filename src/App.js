import React from "react";

import { Routes, BrowserRouter, Route } from "react-router-dom";
import List from "./pages/list/List.js";
import Home from "./pages/home/Home.js";
import Hotel from "./pages/hotel/Hotel.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
