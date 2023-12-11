import React from "react";
import styles from "./styles";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className={`${styles.boxWidth}`}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
