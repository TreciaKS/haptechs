import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./sections/About";
import Product from "./sections/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Product />
    </div>
  );
}

export default App;
