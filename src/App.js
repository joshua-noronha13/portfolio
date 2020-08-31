import React from 'react';
// import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import SideBar from './components/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing/Landing';
import MainNavbar from './components/Navbar/Navbar';
import CardList from './components/Card/CardList';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

function App() {
  const loader = false;
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoader(false), 2000)
  // }, []);
  if (!loader) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <MainNavbar />
              <Landing />
              <SideBar />
              <CardList />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
  return (
    <Loader />
  );
}

export default App;
