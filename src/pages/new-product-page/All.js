import React, { Component } from "react";
import { firestore } from "../../firebase/FirebaseUtils";

import Items from "./Items";
import "./products.css";
import { collectIdsAndDocs } from "../forum-page/UtilFunctions";
class All extends Component {
  state = { items: [] };
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore
      .collection("items")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshop) => {
        const items = snapshop.docs.map(collectIdsAndDocs);
        this.setState({ items });
        console.log(items, "-----items");
        console.log({ items }, "-----items");
      });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { items } = this.state;

    return (
      <main className="">
        <h1>Think Piece</h1>
        <Items items={items} />
      </main>
    );
  }
}

export default All;