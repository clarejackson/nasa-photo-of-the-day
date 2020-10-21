import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
// import Card from "./Card"


const apiKey = '2mkShLeBVBTh55jagY5zd59w6G8uzGGURddMWKoH';


function App() {
const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${apiKey}`)
      .then(response => {
        console.log(response);
        setPhoto(response.data)
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
  }, [])
  
  return (
    
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
  }

export default App;
