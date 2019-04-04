import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import BurgerIngridient from '../Burger/BurgerIngredient/BurgerIngredient';

const bruger = (props) => {
    let transformedIngridients = Object.keys(props.ingredients)
    .map(ingKey => {
        var a = [...Array(props.ingredients[ingKey])]
       return a.map((_, i)=>{
           return <BurgerIngridient key={ingKey + i} type={ingKey}></BurgerIngridient>
       }); 
    })
    .reduce((prev, curr)=>{
        return prev.concat(curr)
    },[]);

    console.log(transformedIngridients);
    if(transformedIngridients.length === 0){
        transformedIngridients = <p>Please start adding ingridients</p>
    }
    return (
        <div className={classes.Burger}>
             <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngridients}
             <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default bruger;