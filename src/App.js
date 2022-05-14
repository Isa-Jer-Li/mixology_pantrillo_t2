import React, { useState, useEffect } from "react";
import './App.css';
// import Footer from '../components/Footer/Footer.jsx';
//import Navbar from '../components/Navbar/NavbarElements.jsx';

function App() {
      const [cocktails, setCocktails] = useState([])

  function Search() {
        const searchBar = document.getElementById('search-bar')

      try {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchBar.value)
        .then((results) => results.json())
        .then((data) => {
          console.log("hello" + data.drinks)
            if(data.drinks === null) {
                document.getElementById('err').innerText = "Oops looks like thats not available :) "
                setCocktails([])
            } else {
                document.getElementById('err').innerHTML = ''
                setCocktails(data.drinks)
            }
        })
  }
catch(error) {
  console.error(error)

  }
}

  return (

    // <NavBar />

    <div>
    <h1 className = "title"> Select your poison! </h1>
   <input id = "search-bar" />
    <button className = "btn" onClick = {Search}> Search... </button>
      <div id = "err"> </div>
     {cocktails.map((drink) => {
        const {idDrink, strDrink, strDrinkThumb, strCategory, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = drink;
        const ingredient = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5].filter(item => item != null && item != '').join(', ')
        return (
          <div key = {idDrink}>
              <h2 className = "drink"> {strDrink} </h2>
              <img className = "img" src = {strDrinkThumb} alt = {strDrink} />
              <h5 className = "category"> {strCategory} </h5>
              <h3 className = "ingredient"> {ingredient} </h3>
              <p className = "instructions"> {strInstructions} </p>
          </div>
        )
      })}



    </div>
  )
}


export default App;
// mod stuff in this file
// this is how you make app