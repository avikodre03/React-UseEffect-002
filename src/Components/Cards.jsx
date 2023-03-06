import React from 'react'
import './Cards.css'

export const Cards = ({ recipes, setRecipes }) => {
    return (
        <div className="cards-container">
            {recipes.map((ele) => {
                console.log(ele.recipe)
                return <div className='cards'>
                    <div className="cardheading">
                    <h1>{ele.recipe.label}</h1>

                    </div>
                    
                    <img src={ele.recipe.image} alt={ele.recipe.label} />
                        <p>Calories :{ele.recipe.calories.toFixed(2)}</p>
                        <p><span>* Ingredient *</span></p>
                        
                    <div className="orderlist">
                    <ol>
                            {ele.recipe.ingredientLines.map((ingredient,index )=> {
                                if(index<=4){
                                    return <li>{ingredient}</li>
                                }
                                
                            })}
                        </ol>

                    </div>
                   

                       
                        


                </div>
            })}
        </div>
    )
}