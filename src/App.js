import React from "react";
import Formulaire from "./Components/form/Form";
import Footer from "./Components/footer/Footer";
import "./app.css";
import Header from "./Components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Formulaire />
      <Footer />
    </div>
  );
}

export default App;
