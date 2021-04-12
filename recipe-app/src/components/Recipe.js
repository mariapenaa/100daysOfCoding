import React from 'react';
import ReactDOM from 'react-dom';
import style from '../css-modules/recipe.module.css'

const Recipe = (props) =>{
    const {name, image, ingredients, calories, totalTime} = props;
    return (
        <div className={style.recipe}>
            <h1>{name}</h1>
            
            <img src={image} className={style.image} />
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                    ))}
            </ol>
            <p>Calories: {Math.floor(calories)}</p>
            <p>Total time: {totalTime}</p>
            
        </div>
    )
}

export default Recipe;