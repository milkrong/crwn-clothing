import React from 'react';
import CardItem from '../../cart-item/cart-item.component';
import { connect } from 'react-redux';
import './cart-drop-down.styles.scss';

import CustomButton from '../../custom-button/custom-buttom.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItem => <CardItem key={cartItem.id} item={cartItem} /> )}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStatetoProps = ({ cart: { cartItems }}) => ({
    cartItems
});

export default connect(mapStatetoProps)(CartDropdown);