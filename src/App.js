import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import "./App.css";
import Home from "./Home/Home";
import { ModeProvider } from "./Home/ModeContext/ModeContext";

export const ModeContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ModeProvider value="light">
        <BrowserRouter>
          <Routes>
            <Route
              path="/portfolio/"
              element={<Navigate to="/portfolio/home/" replace />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/portfolio/home/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ModeProvider>
    </div>
  );
}

export default App;
