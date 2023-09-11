const getStoredCart = () => {
    const savedCartString = localStorage.getItem('cart');
    if(savedCartString){
        return JSON.parse(savedCartString);
    }
    return [];
}

const savedToLocalStorage = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);

    // save to local storage.
    savedToLocalStorage(cart);
}

const removeFormLocalStorage = id => {
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter((idx)=> idx !== id);
    savedToLocalStorage(remaining)
}

export { addToLocalStorage, getStoredCart, removeFormLocalStorage}