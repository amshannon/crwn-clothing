import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


//const mapStateToProps = ({ cart: { cartItems }}) => ({
    const mapStateToProps = state => ({
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
    itemCount: selectCartItemsCount(state)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);