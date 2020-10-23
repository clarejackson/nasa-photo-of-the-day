import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import NasaCard from "./Components/Card"


const apiKey = '2mkShLeBVBTh55jagY5zd59w6G8uzGGURddMWKoH';


function App() {
const [apod, setApod] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2009-01-05`)
      .then(response => {
        console.log(response);
        setApod({ photo: response.data.url, description: response.data.explanation, header: response.data.title })
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
  }, [])
  
  return (
    
    <div className="App">
     <NasaCard apod={apod} />
    </div>
  );
  }

export default App;
