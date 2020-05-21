import React, { Component } from "react";
import Product from "./new-product-page/Product";
import { firestore } from "../firebase/FirebaseUtils";
import Items from "./new-product-page/Items";

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

  /* handleCreate = async (post) => {
    const { posts } = this.state;
    const docRef = await firestore.collection("items").add(post);
    const doc = await docRef.get();
    const newPost = { id: doc.id, ...doc.data() };
    this.setState({ posts: [newPost, ...posts] });
  }; */
  /********************************** 
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore
      .collection("items")
      .doc(this.props.match.params.id)
      .onSnapshot((doc) => {
        {
          const doc1 = { id: doc.id, ...doc.data() };
          console.log("Current data: ", doc1);
          this.setState({ doc1 });
        }       
      });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };
**************************************/
  render() {
    const id = this.props.match.params.id;
    const posts = this.state.posts;
    //console.log("test page -", this.state.posts);
    return (
      <div>
        <h2>THIS is TESTPAGE {id}</h2>
        <Product id={id} />
      </div>
    );
  }
}

export default TestPage;
