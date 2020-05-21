import React, { Component } from "react";

import { firestore } from "../../firebase/FirebaseUtils";

import Posts from "./Posts";
//import "./forum.css";
import { collectIdsAndDocs } from "./UtilFunctions";

class Forum extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot((snapshop) => {
      const posts = snapshop.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Forum;
