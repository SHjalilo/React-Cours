import { useState } from 'react'
import './App.css'
import { Card , Button } from "react-bootstrap";
import  NavBar  from "./component/Navbar";
import  CardDetail  from "./component/CardDetails";


function App() {

  return (
    <div>
      <NavBar />
      <CardDetail />
    </div>
  );
}

export default App
