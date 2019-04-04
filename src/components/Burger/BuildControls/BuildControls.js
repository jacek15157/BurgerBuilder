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
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label}
                ingridientLabel={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}/>
                
            ))}
        </div>
    );
};

export default buildControls;