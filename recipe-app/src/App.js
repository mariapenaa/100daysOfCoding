import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from './components/Recipe'
import Add from './components/Add'

const App = () =>{
  const APP_ID = '9c8c596f';
  const APP_KEY = '2e65c9307c2f9cdb777f0d47defa24e5';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(()=>{
    getRecipes()
  }, [query])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) =>{
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  return (
    <div className="App">
      <h1 className="main-title">My Cookbook</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" >Search</button>
      </form>
      <Add />
      <div className="recipe-container">
        {recipes.map(recipe =>(
          <Recipe 
          name={recipe.recipe.label} 
          image={recipe.recipe.image}
          key={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          calories={recipe.recipe.calories}
          totalTime={recipe.recipe.totalTime}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
