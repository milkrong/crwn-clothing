import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSign, ...rest}) => (
    <button className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`} {...rest}>
        {children}
    </button>
)

export default CustomButton;