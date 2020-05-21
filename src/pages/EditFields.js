import React, { Component } from "react";
import { firestore } from "../firebase/FirebaseUtils";
import FormInput from "../components/form-input/FormInput";

class EditFields extends Component {
  state = {
    reserveItem: [],
    item: [],
    title: "",
  };
  componentDidMount = () => {
    firestore
      .collection("items")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        this.state.reserveItem = doc.data();
        this.state.item = doc.data();
      });
    this.setState({ title: this.props.item.title });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ titleNew: value });
    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
    console.log(this.state.reserveItem, "---this.state.reserveItem");
  };
  handleDiscardTitle = (event) => {
    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ title: this.state.reserveItem.title }, { merge: true });
    console.log(this.state.reserveItem, "---this.state.reserveItem");
    //this.setState({item.title:})
  };

  render() {
    //console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", this.state.id);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", this.state.title);
    //var { id, title } = this.props;
    const { id } = this.props;

    const {
      //title,
      price,
      discountPrice,
      brand,
      collectionsArray,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
      imageUrl7,
      file,
    } = this.props.item;
    //console.log("............this.props..........", this.props);
    //console.log("............this.props.item.....", this.props.item);
    //console.log("............title1.....", title);

    return (
      <div>
        <h1> EDIT FIELDS component--------{id}</h1>
        <h1> EDIT FIELDS comp..........onent--------{this.state.title}</h1>
        <input
          type="text"
          name="title"
          defaultValue={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleDiscardTitle}>Discard</button>
      </div>
    );
  }
}

export default EditFields;
