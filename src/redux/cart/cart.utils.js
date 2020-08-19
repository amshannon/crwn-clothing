export const addItemToCart = (cartItems, cartItemToAdd) => {

    console.log("addItemToCart")

    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        console.log("existingCartItem FOUND")
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }    
            : cartItem
        )
    } else {console.log("existingCartItem NOT FOUND")}

    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }];
}