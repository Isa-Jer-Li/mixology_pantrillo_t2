import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  return (
    <div>
      const [cocktails, setCocktails] = useState([])

      useEffect(() => {
        fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
      })
    </div>
  )
}


export default App;
// mod stuff in this file
// this is how you make app