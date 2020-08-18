import React from 'react';

import { 
  Switch,
  Route
} from 'react-router-dom'

import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  /*
  Don't need constructor any more as we have now connected redux to 
  set the currentUser. setState code is replaced with setCurrentUser 'action' code
  */
  /*constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }*/

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // Check userAuth not null i.e. signing out
      if( userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
       
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/** Header is outside of Switch and Routes so will always render */}
        <Header />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  /*
  dispatch - called by user obj. It is way for redux to know that 
  whatever obj is passsed is an action obj that must be passed to every reducer
  */
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// connect is higher order function
export default connect(null, mapDispatchToProps)(App);
