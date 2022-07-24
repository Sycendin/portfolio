import React, { Fragment } from "react";
import { ModeProvider } from "./Home/ModeContext/ModeContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import Features from "./Home/Features/Features";
import Footer from "./Home/Sections/Footer/Footer";
import "./App.css";
function App() {
  let whichMode = window.localStorage.getItem("mode");

  return (
    <div className="App">
      <ModeProvider value={whichMode ? whichMode : "light"}>
        <BrowserRouter>
          <Routes>
            {/* Change url to /home/ on page visit */}
            <Route
              path="/portfolio/"
              element={<Navigate to="/portfolio/home/" replace />}
            />
            {/* Return NotFound page for wrong URL */}
            <Route
              path="*"
              element={
                <Fragment>
                  <NotFound />
                  <Footer />
                </Fragment>
              }
            />
            <Route path="/portfolio/home/" element={<Home />} />
            <Route
              path="/portfolio/home/:id/"
              element={
                <Fragment>
                  <Features /> <Footer />
                </Fragment>
              }
            />
          </Routes>
        </BrowserRouter>
      </ModeProvider>
    </div>
  );
}

export default App;
