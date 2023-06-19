import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./sections/About";
import Product from "./sections/Product";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <About />
      <Product />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
