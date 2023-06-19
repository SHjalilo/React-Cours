import { useState } from 'react'
import './App.css'
import { Button } from "react-bootstrap";

function App() {
  const name = "Abd El Jalile";

  return (
    <>
        <h1>Hello Everybody</h1>
        <Button variant='primary'> Show</Button> {' '}
        <button className='btn btn-danger'>Click Me</button>
        <h3>
          Welcome to my web page 
        </h3>
        <p> 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quod soluta architecto suscipit repudiandae nisi incidunt exercitationem praesentium impedit fugiat nulla sed sapiente optio voluptatum amet, id veritatis. Dolores, illo.
        </p>
    </>
  )
}

export default App
