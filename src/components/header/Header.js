import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
//import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../assets/crown.svg";
import { auth } from "../../firebase/FirebaseUtils";
//import { auth } from "../firebase/FirebaseUtil";
//import CartIcon from "./CartIcon";
//import CartDropDown from "./CartDropDown";
//import { selectCartHidden } from "../redux/cart/cartSelectors";
//import { selectCurrentUser } from "../redux/user/userSelector";
//import { createStore } from "redux";

//const Header = ({ currentUser, hidden }) => {
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        {/*    <CartIcon /> */}
      </div>
      {/*  {hidden ? null : <CartDropDown />} */}
    </div>
  );
};

/* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
}); */

export default Header;
//export default connect(mapStateToProps)(Header);
