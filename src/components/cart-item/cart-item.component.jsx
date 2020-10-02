import React from 'react';

import {
    CartItemContainer, 
    CartItemImage,
    ItemDetailsContainer,
    ItemNameContainer,
    ItemPriceContainer
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <ItemNameContainer>{name}</ItemNameContainer>
            <ItemPriceContainer>{quantity} x £{price}</ItemPriceContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;