import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Love from "./components/Love";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/services">Services</Link>| <Link to="/love">Love</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/love" element={<Love />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
function Contact() {
  return <h1>Contact Page</h1>;
}
function Services() {
  return <h1>Services Page</h1>;
}
