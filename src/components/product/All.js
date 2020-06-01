import React, { Component } from "react";
import { firestore } from "../../firebase/FirebaseUtils";

import Items from "./Items";
import "./products.css";
import { collectIdsAndDocs } from "../../pages/forum-page/UtilFunctions";
class All extends Component {
  state = { items: [] };
  unsubscribe = null;

  componentDidMount = async () => {
    const colid = this.props.match.params.colid;
    /* const colid = this.props.id; */
    console.log(colid, "this.props.match.params.colid");
    colid &&
      (this.unsubscribe = firestore
        .collection(colid)
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshop) => {
          const items = snapshop.docs.map(collectIdsAndDocs);
          this.setState({ items });
          //console.log(items, "-----items");
          console.log({ items }, "-----items");
        }));
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { items } = this.state;

    return (
      <main className="">
        <h1>Collection - {this.props.match.params.colid}</h1>
        {/* <h1>Collection - {this.props.id}</h1> */}
        <Items items={items} />
      </main>
    );
  }
}

export default All;
