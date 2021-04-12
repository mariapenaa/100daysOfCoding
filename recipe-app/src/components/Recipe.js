import React from 'react';
import ReactDOM from 'react-dom';

const Recipe = (props) =>{
    const {name, image, ingredients} = props;
    return (
        <div>
            <h1>{name}</h1>
            <h2>Calories</h2>
            <img src={image} />
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
        </div>
    );
}

export default Recipe;