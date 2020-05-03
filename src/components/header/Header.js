import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/FirebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.css";

import { ReactComponent as Logo } from "../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <div>
      <div className="header">
        <Link
          className="logo-kapriz"
          to="/"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Flogo2.jpg?alt=media&token=49259f9e-e01b-4215-a9c8-795681ab1e49')`,
          }}
        ></Link>
        {/* <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link> */}
        <div className="main-title">
          <Link to="/">КАПРИЗ</Link>
        </div>

        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/forum">
            FORUM
          </Link>

          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {currentUser && currentUser.email === "1234@hotmail.com" && (
            <Link className="option" to="/new">
              Create New Product
            </Link>
          )}
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
      {currentUser ? (
        <div className="options-1">
          Добро пожаловать, {currentUser.displayName}
        </div>
      ) : (
        <div className="options-1">{"Please, sign in"}</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
