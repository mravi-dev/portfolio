import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Experiance from "./pages/Experiance";
import Recommendations from "./pages/Recommendations";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experiance" element={<Experiance />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
