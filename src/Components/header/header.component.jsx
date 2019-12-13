import React from 'react';
import CartIcon from '../cart-icon/cart-icaon.component';
import CartDropdown from '../cart/cart-drop-down/cart-drop-down';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link to="/shop" className="option">
                CONTACT
            </Link>
            {
                currentUser ? 
                (
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                ) :
                <Link className="option" to="/signIn">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        <CartDropdown />
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
export default connect(mapStateToProps)(Header);