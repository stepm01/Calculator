import React,{useEffect,useState} from 'react';
import Recipes from './Recipe';
import './App.css';

const App = ()=> {
  const APP_ID = "13145913";
  const APP_KEY = "e208e0d8f06b479dc7de057f96cec814";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');


  useEffect( () =>{
    getRecipes();
  },[query]);

  const getRecipes = async () =>{
    const response =  await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
  }
  const updateSearch = (e) =>{
    setSearch(e.target.value);
  }


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipes
        key={recipe.recipe.label} 
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
