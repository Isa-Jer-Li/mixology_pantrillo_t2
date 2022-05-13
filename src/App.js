import React, { useState, useEffect } from "react";
import './App.css';

function App() {
      const [cocktails, setCocktails] = useState([])

  function Search() {
        const searchBar = document.getElementById('search-bar')

        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchBar.value)
        .then((results) => results.json())
        .then((data) => {
          setCocktails(data.drinks)
        })
  }

  return (
    <div>
   <input id = "search-bar" />
    <button onClick = {Search}> Search . . . </button>

     {cocktails.map((drink) => {
        const {idDrink, strDrink, strDrinkThumb, strCategory, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = drink;
        const ingredient = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5].filter(item => item !== null).join(', ')

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