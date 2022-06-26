import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/portfolio/"
            element={<Navigate to="/portfolio/home/" replace />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/portfolio/home/" element={<Home />} />

          {/*  <TwitterTimeline cOptions={{ height: "100vh", width: "50%" }} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
