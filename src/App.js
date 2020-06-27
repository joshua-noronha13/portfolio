import React from "react";
import "./App.css";
import SideBar from "./components/SideNav/SideNav"
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing  from "./components/Landing/Landing"
import MainNavbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div>
      <MainNavbar/>
      <Landing/>
      <SideBar />
    </div>

  );
}

export default App;
