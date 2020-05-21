import React, { Component } from "react";
import Tposts from "./Tposts";
import { firestore } from "../firebase/FirebaseUtils";
import { collectIdsAndDocs } from "../pages/forum-page/UtilFunctions";

export class Tapplication extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
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
        <Tposts posts={posts} />
      </main>
    );
  }
}

export default Tapplication;
