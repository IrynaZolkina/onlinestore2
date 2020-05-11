import React, { Component } from "react";
import AddItem from "./AddItem";
import { firestore } from "../../firebase/FirebaseUtils";

import Items from "./Items";
import "./products.css";
import { collectIdsAndDocs } from "../forum-page/UtilFunctions";
class NewProduct extends Component {
  render() {
    return (
      <main className="">
        <h1>Think Piece</h1>
        <AddItem />
      </main>
    );
  }
}

export default NewProduct;
