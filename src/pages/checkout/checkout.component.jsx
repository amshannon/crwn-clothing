import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { 
    selectCartItems, 
    selectCartTotal 
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )}
        <TotalContainer><span>TOTAL: £{total}</span></TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4000 0082 6000 0000 - Exp: 01/21 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
