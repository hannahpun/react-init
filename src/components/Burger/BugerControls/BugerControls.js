import React from 'react';
import classes from './BugerControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BurgerControls = (props) => {
  // let purchasable = props.purchasable ? 'disabled' : null;
  // let purchase = disabled
  // debugger
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map( (ele, i) => {
        return <BuildControl 
                  added={ () => { props.added(ele.type)} }
                  removed={ () => { props.removed(ele.type)} }
                  disabled={ props.disabled(ele.type) }
                  label={ele.label}
                  key={i} />
      })}
      <button disabled={props.price !== 0 ? null : 'disabled'} className={classes.OrderButton}>Order Now</button>
    </div>

  )
}

export default BurgerControls;