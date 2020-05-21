import React, { Component } from "react";

import { selectCollection } from "../redux/shop/shopSelectors";
import CollectionItem from "../components/collection-item/CollectionItem";
import { NavLink } from "react-router-dom";
import { firestore } from "../firebase/FirebaseUtils";
import All from "../pages/new-product-page/All";

//const CollectionPage = ({ match }) => {
class CollectionPage extends Component {
  state = {
    name: "",
    collection: [],
  };

  componentDidMount = async () => {
    console.log("componentDidMount", this.state);
    const { match } = this.props;
    const collectionId = match.params.collectionId;

    const doc = await firestore
      .collection("collection-description")
      .doc(collectionId)
      .get();
    const data = doc.data();
    this.setState({ name: data.name });

    const doc2 = await firestore.collection(collectionId).get();
    const collection = doc2.docs.map((doc) => {
      console.log({ id: doc.id, ...doc.data() });
      return { id: doc.id, ...doc.data() };
    });
    this.setState({ collection: { collection } });
  };
  render() {
    const { collection } = this.state;
    console.log(collection, "collection");
    console.log(this.state, "wwwwwwwwwwwwww");
    const { match } = this.props;
    const collectionId = match.params.collectionId;
    const tt = "555";

    return (
      <div className="collection-page">
        <h1 className="title-collection-page">hello</h1>
        <h1>{collectionId}</h1>
        <h1>{this.state.name} </h1>
        <NavLink to={`/all/${collectionId}`}>{tt}</NavLink>
        {/*  <NavLink to={`col/${tt}`}>{tt}</NavLink> */}
        {/* <div className="collection-container">
          <All />
        </div> */}
        {/* <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
          ))}
        </div> */}
      </div>
    );
  }
}

export default CollectionPage;

/* const CollectionPage = ({ collection }) => {
  console.log("this is CollectionPage");
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
 */
