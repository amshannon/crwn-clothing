import React from 'react';

import './header.styles.scss';

import { Link } from 'react-router-dom';

// connect is a higher order function
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/**
 * Below is special syntax in React for importing SVG in React.
 * The ReactComponent import name is special and tells Create React App
 * that you want a React component that renders an SVG, rather than its 
 * filename.
 */
import { ReactComponent as Logo } from '../../assets/crown.svg' 
 
const Header = ({ currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
)

// state is top-level root reducer
// { user: {currentUser }, cart: { hidden } } - this is NESTED DESTRUCTURING syntax
const mapStateToProps = ({ user: {currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

// connect is a higher order function
export default connect(mapStateToProps)(Header);
