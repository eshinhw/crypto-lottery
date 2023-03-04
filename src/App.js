import { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import NumberSelection from "./components/NumberSelection";

function App() {
  
  return (
    <>
      <Header />
      <NumberSelection />

    </>
  );
}

export default App;
