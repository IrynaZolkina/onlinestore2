import React, { Component } from "react";
import Product from "./Product";
import { firestore } from "../../firebase/FirebaseUtils";

class TestPage extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore
      .collection("items")
      .doc(this.props.match.params.id)
      .onSnapshot((doc) => {
        {
          const posts = { id: doc.id, ...doc.data() };
          //console.log("Current data: ", posts);
          this.setState({ posts });
        }
      });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const id = this.props.match.params.id;

    //console.log("test page -", this.state.posts);
    return (
      <div>
        {/*  <h2>THIS is TESTPAGE {id}</h2> */}
        <Product id={id} />
      </div>
    );
  }
}

export default TestPage;
