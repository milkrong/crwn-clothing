import React from 'react';
import HomePage from './Pages/home/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ShopPage from './Pages/shop/shop.component';

import Header from './Components/header/header.component';
import SignInUp from './Pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
