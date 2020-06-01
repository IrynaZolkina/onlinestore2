import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Product from "../components/product/Product";

class EditItem extends Component {
  render() {
    const { id } = this.props.match.params.id;

    console.log("-edit component", id);
    return (
      <div>
        <h1>four hello</h1>
        <Product id={id} />
        {/* <button onClick={() => this.props.history.push(`/item/${id}`)}>
          PUSH
        </button> */}
        {/*  <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl1})`,
            }}
            alt=""
          />

          {showEditButton &&
            {
              /* <NavLink className="" to={`/edit/${id}`}>
              EDIT Item
            </NavLink> */}
        {/* </div>  */}
      </div>
    );
  }
}

export default withRouter(EditItem);
