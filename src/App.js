import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import "./index.css";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUpPage";

import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";
import CheckOutPage from "./pages/checkout-page/CheckOutPage";

import NewProduct from "./components/product/NewProduct";
import Forum from "./pages/forum-page/Forum";
import All from "./components/product/All";
import CollectionPage from "./collections/CollectionPage";
import CollectionList from "./collections/CollectionList";
import SingleItemPage from "./pages/SingleItemPage";
import EditItem from "./pages/EditItem";
import TestPage from "./components/product/TestPage";
//import Tapplication from "./test/Tapplication";
import ManageNavbar from "./components/navbar/ManageNavbar";

/* const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
); */

class App extends Component {
  unsubscribeFromAuth = null;

  /* componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
      
    });
  } */
  componentDidMount() {
    //console.log("componentDidMount-object");
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapShot) => {
          /* this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
          console.log(this.state); */
          //this.props.setCurrentUser({-distr
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //this.setState({ currentUser: userAuth });
        setCurrentUser(userAuth);
      }
      //createUserProfileDocument(user);
    });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/managenavbar" component={ManageNavbar} />
          <Route exact path="/new" component={NewProduct} />
          <Route exact path="/all/:colid" component={All} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/item/:itemId" component={SingleItemPage} />
          <Route exact path="/edit/:id" component={EditItem} />
          <Route exact path="/testpage/:id" component={TestPage} />
          {/***********   <Route exact path="/testpage/:id" component={Tapplication} /> ********/}

          <Route path="/shop/col/:tt" component={CollectionList} />
          <Route path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          {/* <Route path="/hats" component={HatsPage} /> */}
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
