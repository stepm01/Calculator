import React from "react";
import './Recipe.css';


const Recipes = ({title,calories,image,ingredients})=>{
    const calorii = Math.floor(calories);
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={image} alt=""/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li className="text">{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories : {calorii}</p>
        </div>
    );
};
export default Recipes;