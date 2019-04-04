import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheeese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label}
                ingridientLabel={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                subtracted = {()=>props.ingredientSubtracted(ctrl.type)}
                disabled ={props.disabled[ctrl.type]} />
            ))}
        </div>
    );
};

export default buildControls;