import React from "react";
import "./App.css";
import { CardList } from "./components/CardList"
import { IconBar } from "./components/IconBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing  from "./components/Landing"
function App() {
  return (
    <div>
      {/* <div
        style={{
          width: "100vw",
          height: "140vh",
          backgroundColor: '#000000',
          backgroundImage: 'linear-gradient(147deg, #000000 0%, #434343 74%)',
        }}
      /> */}
      

      <Landing/>
      <Landing/>
      <Landing/>

      <IconBar />
    </div>

  );
}

export default App;
