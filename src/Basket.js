import React from 'react';
import BasketItem from './BasketItem';


export default function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;
    
    // Money calculations
    let itemsPrice =[];
    let subtotal = 0;
    cartItems.forEach((item) => {
    let itemName = ( item.price * item.amount);

    itemsPrice.push(itemName);
    }
    );

    itemsPrice.forEach((item) => {
        subtotal = subtotal + item;

    })

    let taxPrice = subtotal* 0.12;
    const totalPrice = subtotal + taxPrice;
    taxPrice = Math.round( taxPrice );
    totallPricing();
    function totallPricing(){
        props.setTotalPrice(totalPrice);
    };

    console.log(props);
    function extraSeting () {
        const exValeu = document.querySelector(".extra > input").value;
        if (exValeu){
            props.setExtras(exValeu);
        }
    }
    
    if (cartItems.length > 0) {
        document.querySelector("#basketER").classList.add("hideER");
    }

    return (
        <section className="cart">
            <div className="items">
                <h1>ORDER</h1>
                <img alt="this is a cart" className="icon" src="./cart.png"></img>
            </div>
            <div className="emptyTitle">
                {cartItems.length === 0 && <div>Order is empty</div>}
            </div>
            <div className="itemsHolder">
                {cartItems.map((item) => (
                    <BasketItem
                    key={item.id}
                    {...item}
                    onAdd={onAdd}
                    onRemove={onRemove}/>
                ))}
            </div>
            <div className="extra">
                <input type="text" onChange={extraSeting} placeholder="extra..."></input>
            </div>

            <div className="total">
                {cartItems.length !== 0 && (
                    <>
                        <div className="row">
                            <div className="col1">Items Price</div>
                            <div className="col2">{subtotal}dkk</div>
                        </div>

                        <div className="row">
                            <div className="col1">Tax Price</div>
                            <div className="col2">{taxPrice}dkk</div>
                        </div>

                        <div className="row">
                            <div className="col1"><strong>Total</strong></div>
                            <div className="col2"  >{totalPrice}dkk</div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )

}