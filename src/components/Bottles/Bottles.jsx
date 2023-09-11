import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFormLocalStorage } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[]);

    // load cart from local storage
    useEffect(() => {
        console.log("call the useEffect", bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart()
            console.log(storedCart, bottles);
            const savedCart = [];
            for(const id of storedCart) {
                console.log(id);
                const bottle = bottles.find( bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart);
            setCart(savedCart)
        }
    },[bottles])


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLocalStorage(bottle?.id)
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        // remove from local storage.
        removeFormLocalStorage(id)
    }

    return (
        <div>
            <h2>Bottles here: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} purchaseHandler={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;