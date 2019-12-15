import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSign, inverted, ...rest}) => (
    <button className={` ${inverted? 'inverted' : ''}
    ${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...rest}>
        {children}
    </button>
)

export default CustomButton;