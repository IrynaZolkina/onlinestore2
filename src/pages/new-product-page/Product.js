import React, { Component } from "react";

import { firestore } from "../../firebase/FirebaseUtils";
import EditFields from "../EditFields";
import { storage } from "../../firebase/FirebaseUtils";
import firebase from "../../firebase/FirebaseUtils";
import FormInput from "../../components/form-input/FormInput";
import SelectCollection from "../../collections/SelectCollection";
import CollectionList from "../../collections/CollectionList";
import Collections from "../../collections/Collections";

class Product extends Component {
  state = {
    title: "",
    price: "",
    discountPrice: "",
    brand: "",

    collectionsArray: [],
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: "",
    imageUrl7: "",
    file: "",
    item: [],
    titleRes: "",
    priceRes: "",
    showMenu: false,
    arrayNavbar: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    firestore
      .collection("navbarTest")
      .orderBy("order", "desc")
      .get()
      .then((doc) => {
        doc.forEach((doc) => {
          const arrayNavbar = this.state.arrayNavbar;

          this.setState({
            arrayNavbar: [doc.data(), ...arrayNavbar],
          });
        });
      });
    /******** Reserving data ***********/
    firestore
      .collection("items")
      .doc(this.props.id)
      .get()
      .then((doc) => {
        doc = doc.data();
        this.setState({ titleRes: doc.title });
        this.setState({ priceRes: doc.price });
      });

    const { id } = this.props;

    /********* Subscription ********* */
    this.unsubscribe = firestore
      .collection("items")
      .doc(id)
      .onSnapshot((snapshot) => {
        const item = snapshot.data();

        this.setState({ ...item });
        //console.log(item.collectionsArray);
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleImage = (e) => {
    const file = e.target.files[0];
    console.log("eeeeeeeeee", e.target.name);
    const name = e.target.name;
    const id = this.props.id;
    const uploadTask = storage
      .ref()
      .child(`/kapris/products/${id}/${name}`)
      .put(e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);

          firestore
            .collection("items")
            .doc(id)
            .set({ [name]: downloadURL }, { merge: true });
        });
      }
    );
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
  };
  handleDiscardTitle = (e) => {
    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ title: this.state.titleRes }, { merge: true });
  };
  handleDiscardPrice = (e) => {
    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ price: this.state.priceRes }, { merge: true });
  };
  /* addCollection = (col) => {
    const { collectionsArray } = this.state.collectionsArray;
    this.setState({ collectionsArray: [col, ...collectionsArray] });
  };
  removeCollection = (col) => {
    const { collectionsArray } = this.state.collectionsArray;
    this.setState({ collectionsArray: [col, ...collectionsArray] });
  }; */
  changeShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { id } = this.props;
    const {
      title,
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
      arrayNavbar,
    } = this.state;
    const item = this.state.item;

    //console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", id);
    //console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", this.state);
    //console.log("--------item------------", item);
    return (
      <div>
        <h1>{id}</h1>
        <h1>Product Component-title----- {title}</h1>
        <h1>Product Component-id----- {id}</h1>
        <h1>"title---"t-id----- {this.state.titleRes}</h1>
        {/* <EditFields id={id} item={item} /> */}
        <FormInput
          type="text"
          name="title"
          placeholder="Title"
          label="Title"
          value={title}
          onChange={this.handleChange}
        />
        <button onClick={this.handleDiscardTitle}>DISCARD ALL CHANGES</button>
        <FormInput
          type="text"
          name="price"
          placeholder="price"
          value={price}
          label="Price"
          onChange={this.handleChange}
        />
        <button onClick={this.handleDiscardPrice}>DISCARD ALL CHANGES</button>
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
        <Collections
          id={this.props.id}
          collectionsArray={collectionsArray}
          arrayNavbar={arrayNavbar}
          changeShowMenu={this.changeShowMenu}
          showMenu={this.state.showMenu}
        />
        <span>First Image</span>
        <input
          type="file"
          name="imageUrl1"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl1})`,
            }}
            alt=""
          />
        </div>
        <span> Second Image</span>
        <input
          type="file"
          name="imageUrl2"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl2})`,
            }}
            alt=""
          />
        </div>
        <span> 3 Image</span>
        <input
          type="file"
          name="imageUrl3"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl3})`,
            }}
            alt=""
          />
        </div>
        <span> 4 Image</span>
        <input
          type="file"
          name="imageUrl4"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl4})`,
            }}
            alt=""
          />
        </div>
        <span> 5 Image</span>
        <input
          type="file"
          name="imageUrl5"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl5})`,
            }}
            alt=""
          />
        </div>
        <span> 6 Image</span>
        <input
          type="file"
          name="imageUrl6"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl6})`,
            }}
            alt=""
          />
        </div>
        <span> 7 Image</span>
        <input
          type="file"
          name="imageUrl7"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl7})`,
            }}
            alt=""
          />
        </div>
        <button>EXIT</button> {/**/}
      </div>
    );
  }
}

export default Product;

/* import React, { Component } from "react";

import { firestore } from "../../firebase/FirebaseUtils";
import EditFields from "../EditFields";
import { storage } from "../../firebase/FirebaseUtils";
import firebase from "../../firebase/FirebaseUtils";
import FormInput from "../../components/form-input/FormInput";

class Product extends Component {
  state = {
    title: "",
    price: "",
    discountPrice: "",
    brand: "",
    collectionsArray: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: "",
    imageUrl7: "",
    file: "",
    item: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    const { id } = this.props;
    this.unsubscribe = firestore
      .collection("items")
      .doc(id)
      .onSnapshot((snapshot) => {
        const item = snapshot.data();
        const {
          title,
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
        } = item;
        this.setState({
          title,
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
        });
      });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleImage = (e) => {
    const file = e.target.files[0];
    console.log("eeeeeeeeee", e.target.name);
    const name = e.target.name;
    const id = this.props.id;
    const uploadTask = storage
      .ref()
      .child(`/kapris/products/${id}/${name}`)
      .put(e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);

          firestore
            .collection("items")
            .doc(id)
            .set({ [name]: downloadURL }, { merge: true });
        });
      }
    );
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
  };
  handleDiscardTitle = (e) => {
    console.log("handleDiscard", e.target);
    const name = e.target.name;
    const value = e.target.value;

    console.log("handleDiscard-value", value);

    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
  };
  render() {
    const { id } = this.props;
    const {
      title,
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
    } = this.state;

    console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", id);
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", this.state);
    return (
      <div>
        <h1>{id}</h1>
        <h1>Product Component-title----- {title}</h1>
        <h1>Product Component-id----- {id}</h1>

        <FormInput
          type="text"
          name="title"
          placeholder="Title"
          label="Title"
          value={title}
          onChange={this.handleChange}
        />
        <button name="title" value={title} onClick={this.handleDiscardTitle}>
          {" "}
          DISCARD ALL CHANGES
        </button>
        <FormInput
          type="text"
          name="price"
          placeholder="price"
          value={price}
          label="Price"
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

        <span>First Image</span>
        <input
          type="file"
          name="imageUrl1"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl1})`,
            }}
            alt=""
          />
        </div>
        <span> Second Image</span>
        <input
          type="file"
          name="imageUrl2"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl2})`,
            }}
            alt=""
          />
        </div>

        <span> 3 Image</span>
        <input
          type="file"
          name="imageUrl3"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl3})`,
            }}
            alt=""
          />
        </div>
        <span> 4 Image</span>
        <input
          type="file"
          name="imageUrl4"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl4})`,
            }}
            alt=""
          />
        </div>
        <span> 5 Image</span>
        <input
          type="file"
          name="imageUrl5"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl5})`,
            }}
            alt=""
          />
        </div>
        <span> 6 Image</span>
        <input
          type="file"
          name="imageUrl6"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl6})`,
            }}
            alt=""
          />
        </div>
        <span> 7 Image</span>
        <input
          type="file"
          name="imageUrl7"
          placeholder="file"
          onChange={this.handleImage}
        />
        <div className="grid-item">
          <img
            className="grid-image"
            style={{
              backgroundImage: `url(${imageUrl7})`,
            }}
            alt=""
          />
        </div>

        <button>EXIT</button>
      </div>
    );
  }
}

export default Product;
 */
