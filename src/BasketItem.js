import React from 'react'

export default function BasketItem(props) {
console.log(props);
    const {onAdd, onRemove} = props;
    console.log(onRemove);
    return (
        <div id="details">
    
<p className="pName">{props.name}</p>
<p className="pQuant">{props.amount} x {props.price}</p>
<div>
<button type="button" onClick={() => onAdd(props)} className="add">+</button>
<button type="button" onClick={() => onRemove(props)} className="add">-</button>
</div>
        </div>
    )
}
