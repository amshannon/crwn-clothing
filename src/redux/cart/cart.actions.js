import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    // no need to pass payload as this is optional and not used
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})