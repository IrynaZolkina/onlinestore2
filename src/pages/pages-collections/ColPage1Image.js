import React from "react";

import { connect } from "react-redux";
//import { selectCartItems } from "../redux/cart/cartSelectors";
//import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collectionpage.css";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { Link } from "react-router-dom";

const ColPage1Image = ({ collection, match }) => {
  console.log(collection, "wwwwwwwwwwwwww");

  return (
    <div className="collection-page">
      <h1>hello</h1>
      <h1>{match.params.td}</h1>

      {/* <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(ColPage1Image);
