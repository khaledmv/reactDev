import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Switch,
  Route

} from "react-router-dom";

import { setCurrentUser} from './redux/user/user.action'

import './App.css';
import Header from "./components/header/header";
import AboutPage from "./pages/about/aboutPage";
import HomePage from './pages/home/homePage';
import Register from "./pages/register/register";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import ShopPage from "./pages/shop/shopPage";


class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({currentUser: user});

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
   
      this.setState(userAuth);
   
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
        <Header />
        <div>
            <BrowserRouter>
            <Switch>
              <Route exact path="/"><HomePage /></Route>
              <Route path="/shop"><ShopPage/></Route>
              <Route path="/sign-in"><Register/></Route>
              <Route path="/shop/hats"><AboutPage/></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </>
    )
  }
}

const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchProps)(App);
