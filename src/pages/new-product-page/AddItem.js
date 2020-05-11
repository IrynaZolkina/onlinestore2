import React, { Component } from "react";
import { firestore } from "../../firebase/FirebaseUtils";

class AddItem extends Component {
  state = {
    title: "",
    price: "",
    discountPrice: "",
    brand: "",
    collectionsArray: "",
    imageUrl1: "",
    imageUrl2: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { onCreate } = this.props;
    const {
      title,
      price,
      discountPrice,
      brand,
      collectionsArray,
      imageUrl1,
      imageUrl2,
    } = this.state;

    const item = {
      title,
      price,
      discountPrice,
      brand,
      collectionsArray,
      imageUrl1,
      imageUrl2,
      createdAt: new Date(),
    };

    firestore.collection("items").add(item);

    this.setState({
      title: "",
      price: "",
      discountPrice: "",
      brand: "",
      collectionsArray: "",
      imageUrl1: "",
      imageUrl2: "",
    });
  };

  render() {
    const {
      title,
      price,
      discountPrice,
      brand,
      collectionsArray,
      imageUrl1,
      imageUrl2,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="price"
          value={price}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="discountPrice"
          placeholder="discountPrice"
          value={discountPrice}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="brand"
          value={brand}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="collectionsArray"
          placeholder="collectionsArray"
          value={collectionsArray}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="imageUrl1"
          placeholder="imageUrl1"
          value={imageUrl1}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="imageUrl2"
          placeholder="imageUrl2"
          value={imageUrl2}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Create Item" />
      </form>
    );
  }
}

export default AddItem;
