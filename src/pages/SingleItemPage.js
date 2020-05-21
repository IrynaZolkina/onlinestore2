import React, { Component } from "react";
import { firestore } from "../firebase/FirebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/userSelector";
import EditItem from "./EditItem";
import { NavLink } from "react-router-dom";
import TestPage from "./TestPage";

class SingleItemPage extends Component {
  state = {};

  unsubscribe = null;

  componentDidMount = async () => {
    const id = this.props.match.params.itemId;
    console.log("componentDidMount component", id);
    this.unsubscribe = firestore
      .collection("items")
      .doc(id)
      .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());

        this.setState({ id: doc.id, ...doc.data() });
      });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };
  render() {
    const { id, title, price, imageUrl1 } = this.state;
    const { item } = this.state;
    console.log("edit component", this.state);
    const { currentUser } = this.props;
    const showEditButton =
      currentUser && currentUser.email === "1234@hotmail.com" ? true : false;
    return (
      <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <h1>{price}</h1>

        {showEditButton && (
          <NavLink className="" to={`/edit/${id}`}>
            EDIT Item
          </NavLink>
        )}
        {/* <EditItem item={this.state} showEditButton={showEditButton} /> */}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SingleItemPage);

//export default Edit;
