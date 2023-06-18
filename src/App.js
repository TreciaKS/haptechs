import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./sections/About";
import Product from "./sections/Product";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Product />
      <Testimonials />
      <Services />
    </div>
  );
}

export default App;
