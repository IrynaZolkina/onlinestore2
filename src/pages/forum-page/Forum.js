import React, { Component } from "react";

import { firestore } from "../../firebase/FirebaseUtils";

import Posts from "./Posts";
import "./forum.css";
import { collectIdsAndDocs } from "./UtilFunctions";

class Forum extends Component {
  state = {
    posts: [
      /*  {
        id: "1",
        title: "A Very Hot Take",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
        user: {
          uid: "123",
          displayName: "Bill Murray",
          email: "billmurray@mailinator.com",
          photoURL: "https://www.fillmurray.com/300/300",
        },
        stars: 1,
        comments: 47,
      },
      {
        id: "2",
        title: "The Sauciest of Opinions",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!",
        user: {
          uid: "456",
          displayName: "Mill Burray",
          email: "notbillmurray@mailinator.com",
          photoURL: "https://www.fillmurray.com/400/400",
        },
        stars: 3,
        comments: 0,
      }, */
    ],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection("posts").onSnapshot((snapshop) => {
      const posts = snapshop.docs.map(collectIdsAndDocs);
      this.setState({ posts });
      console.log(posts, "-----posts");
      console.log({ posts }, "-----posts");
    });
    /*********
     const snapshot = await firestore.collection("posts").get();

    const posts = snapshot.docs.map(collectIdsAndDocs);

    this.setState({ posts });
***********/

    /* snapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      console.log({ id, data });
    }); */
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleCreate = async (post) => {
    //const { posts } = this.state;

    firestore.collection("posts").add(post);
    //const docRef = await firestore.collection("posts").add(post);

    //const doc = await docRef.get();
    //const newPost = collectIdsAndDocs(doc);
    //this.setState({ posts: [newPost, ...posts] });
  };

  handleRemove = async (id) => {
    const allPosts = this.state.posts;

    firestore.doc(`posts/${id}`).delete();

    await firestore.doc(`posts/${id}`).delete();
    const posts = allPosts.filter((post) => post.id !== id);

    //this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Forum;
