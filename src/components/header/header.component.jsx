import React from 'react';

// connect is a higher order function
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
 
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

/**
 * Below is special syntax in React for importing SVG in React.
 * The ReactComponent import name is special and tells Create React App
 * that you want a React component that renders an SVG, rather than its 
 * filename.
 */
import { ReactComponent as Logo } from '../../assets/crown.svg' 
 
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
)

// state is top-level root reducer
// { user: {currentUser }, cart: { hidden } } - this is NESTED DESTRUCTURING syntax
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// connect is a higher order function
export default connect(mapStateToProps)(Header);
