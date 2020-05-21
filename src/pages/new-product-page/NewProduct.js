import React from "react";
import AddItem from "./AddItem";

import "./products.css";
import { collectIdsAndDocs } from "../forum-page/UtilFunctions";
const NewProduct = () => {
  return (
    <main className="">
      <h1>Think Piece</h1>
      <AddItem />
    </main>
  );
};

export default NewProduct;
