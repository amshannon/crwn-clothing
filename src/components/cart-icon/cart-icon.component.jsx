import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


//const mapStateToProps = ({ cart: { cartItems }}) => ({
    const mapStateToProps = createStructuredSelector({
/*
    Below is a SELECTOR - code that gets a state and then pulls off 
    just a slice of the state. Computing a new value based on the state.
    Caveat - when any reducer updtes we always returna  new object.
    mapStateToProps is called every time state updates, even if the state 
    change is nothing to do with the cart. This isn't good for performance.
    Don't want to rerender component every time state changes if it doesn't
    affect the component. We need to store previous value.
    MEMOIZATION - caching of selector's value. Use 'reselect' library to work 
    out if selector has changed and therfore components need to be rerendered.
    */
   /*itemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0
    )*/
    /*
    get item count from memoized selector (using reselect library)
    need to pass the state to the selector
    */
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);