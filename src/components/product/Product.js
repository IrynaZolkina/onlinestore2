import React, { Component } from "react";

import "./product.css";

import { firestore } from "../../firebase/FirebaseUtils";
import EditFields from "../../pages/EditFields";
import { storage } from "../../firebase/FirebaseUtils";
import firebase from "../../firebase/FirebaseUtils";
import FormInput from "../../utilities/form-input/FormInput";
import SelectCollection from "../../collections/SelectCollection";
import CollectionList from "../../collections/CollectionList";
import Collections from "../../collections/Collections";
import ProductSmallImage from "./ProductSmallImage";

class Product extends Component {
  state = {
    title: "",
    price: "",
    discountPrice: "",
    //brand: "",
    createdAt: "",
    titleCode: "",
    codeTovara: "",
    shortDescription: "",
    description: "",
    collectionsArray: [],
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
    imageUrl5: "",
    imageUrl6: "",
    imageUrl7: "",
    novinka: false,

    item: [],

    showMenu: false,
    arrayNavbar: [],

    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    mainImageUrl: "",
    editMode: false,
  };

  unsubscribe = null;

  componentDidMount = async () => {
    console.log("pProduct component");
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

        this.setState({ item: { ...doc } });
        //console.log({ ...doc }, "object");
        console.log(doc.novinka, "object");
      });

    const { id } = this.props;

    /********* Subscription ********* */
    this.unsubscribe = firestore
      .collection("items")
      .doc(id)
      .onSnapshot((snapshot) => {
        const item = snapshot.data();

        this.setState({ ...item });

        this.setState({ mainImageUrl: item.imageUrl1 });

        const title = item.title;
        const titleCode = item.titleCode;

        const string11 = titleCode.substring(0, 2);
        const string111 = title.substring(0, string11);

        const string22 = titleCode.substring(2, 4);
        const string222 = title.substring(
          parseInt(string11) + 1,
          parseInt(string11) + 1 + parseInt(string22)
        );

        const string33 = titleCode.substring(4, 6);
        const string333 = title.substring(
          parseInt(string11) + parseInt(string22) + 2,
          parseInt(string11) + parseInt(string22) + parseInt(string33) + 2
        );

        const string44 = titleCode.substring(6, 8);
        const string444 = title.substring(
          parseInt(string11) + parseInt(string22) + parseInt(string33) + 3,
          parseInt(string11) +
            parseInt(string22) +
            parseInt(string33) +
            parseInt(string44) +
            3
        );

        const string55 = titleCode.substring(8, 10);
        const string555 = title.substring(
          parseInt(string11) +
            parseInt(string22) +
            parseInt(string33) +
            parseInt(string44) +
            4,
          parseInt(string11) +
            parseInt(string22) +
            parseInt(string33) +
            parseInt(string44) +
            parseInt(string55) +
            4
        );

        this.setState({ title1: string111 });

        this.setState({ title2: string222 });

        this.setState({ title3: string333 });

        this.setState({ title4: string444 });
        this.setState({ title5: string555 });
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

          this.state.collectionsArray.map((collectionCode) => {
            console.log("888", collectionCode);
            firestore
              .collection(collectionCode)
              .doc(id)
              .set({ [name]: downloadURL }, { merge: true });
          });
        });
      }
    );
  };

  handleDeleteImage = (imageName) => {
    console.log("eeeeeeeeee", imageName);
    storage
      .ref()
      .child(`/kapris/products/${this.props.id}/${imageName}`)
      .delete()
      .then(function () {
        // File deleted successfully
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
      });
    this.state.collectionsArray.map((collectionCode) => {
      console.log("888", collectionCode);
      firestore
        .collection(collectionCode)
        .doc(this.props.id)
        .set(
          {
            [imageName]: "",
          },
          { merge: true }
        );
    });
    firestore
      .collection("items")
      .doc(this.props.id)
      .set(
        {
          [imageName]: "",
        },
        { merge: true }
      );
  };
  handleChangeMainImage = ({ imageUrl }) => {
    console.log("555555", imageUrl);
    this.setState({ mainImageUrl: imageUrl });
  };
  /* handleChange = (event) => {
    const { name, value } = event.target;

    firestore
      .collection("items")
      .doc(this.props.id)
      .set({ [name]: value }, { merge: true });
  }; */
  handleChangeStateByName = (event) => {
    const { name, value } = event.target;
    console.log(name, "***", value);
    this.setState({ [name]: value });
  };
  handleSubmitAll = () => {
    const length1 = this.state.title1.length;
    const length2 = this.state.title2.length;
    const length3 = this.state.title3.length;
    const length4 = this.state.title4.length;
    const length5 = this.state.title5.length;

    const titleCode =
      (length1 <= 9 ? "0" + length1.toString() : length1.toString()) +
      (length2 <= 9 ? "0" + length2.toString() : length2.toString()) +
      (length3 <= 9 ? "0" + length3.toString() : length3.toString()) +
      (length4 <= 9 ? "0" + length4.toString() : length4.toString()) +
      (length5 <= 9 ? "0" + length5.toString() : length5.toString());

    //console.log(titleCode, "bland");
    const string =
      this.state.title1 +
      " " +
      this.state.title2 +
      " " +
      this.state.title3 +
      " " +
      this.state.title4 +
      " " +
      this.state.title5;
    firestore.collection("items").doc(this.props.id).set(
      {
        title: string,
        titleCode: titleCode,
        price: this.state.price,
        discountPrice: this.state.discountPrice,
        codeTovara: this.state.codeTovara,
        description: this.state.description,
        shortDescription: this.state.shortDescription,
        novinka: this.state.novinka,
      },
      { merge: true }
    );
    this.state.collectionsArray.map((collectionCode) => {
      //console.log("888", collectionCode);
      firestore.collection(collectionCode).doc(this.props.id).set(
        {
          title: string,
          titleCode: titleCode,

          price: this.state.price,
          discountPrice: this.state.discountPrice,
          imageUrl1: this.state.imageUrl1,
          imageUrl2: this.state.imageUrl2,
          createdAt: this.state.createdAt,
          novinka: this.state.novinka,
        },
        { merge: true }
      );
    });
  };

  handleDiscard = (name) => {
    console.log("title1", name);
    if (name === "title1") {
      const titleCode = this.state.item.titleCode;
      const string111 = this.state.item.title.substring(
        0,
        titleCode.substring(0, 2)
      );

      this.setState({ title1: string111 });
    } else if (name === "title2") {
      const titleCode = this.state.item.titleCode;

      const string222 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) + 1,
        parseInt(titleCode.substring(0, 2)) +
          1 +
          parseInt(titleCode.substring(2, 4))
      );
      this.setState({ title2: string222 });
    } else if (name === "title3") {
      const titleCode = this.state.item.titleCode;

      const string333 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          2,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          2
      );

      this.setState({ title3: string333 });
    } else if (name === "title4") {
      const titleCode = this.state.item.titleCode;

      const string444 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          3,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          3
      );
      this.setState({ title4: string444 });
    } else if (name === "title5") {
      const titleCode = this.state.item.titleCode;

      const string555 = this.state.item.title.substring(
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          4,
        parseInt(titleCode.substring(0, 2)) +
          parseInt(titleCode.substring(2, 4)) +
          parseInt(titleCode.substring(4, 6)) +
          parseInt(titleCode.substring(6, 8)) +
          parseInt(titleCode.substring(8, 10)) +
          4
      );
      this.setState({ title5: string555 });
    } else {
      this.setState({ [name]: this.state.item[name] });
    }
  };

  changeShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { id } = this.props;
    const {
      title,
      price,
      discountPrice,
      titleCode,
      codeTovara,
      description,
      createdAt,
      shortDescription,
      collectionsArray,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      imageUrl4,
      imageUrl5,
      imageUrl6,
      imageUrl7,
      novinka,
      arrayNavbar,
      title1,
      title2,
      title3,
      title4,
      title5,
      mainImageUrl,
      editMode,
    } = this.state;
    const item = this.state.item;

    //: title

    //console.log("hhhhhhhhhh", string1);
    //console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", this.state);
    //console.log("--------item------------", item);
    return (
      <div>
        {/* <h1>{id}</h1> */}
        <div className="product-page-container">
          <div className="product-section-1-grid">
            <div className="product-small-images-container">
              <ProductSmallImage
                imageName={"imageUrl1"}
                imageUrl={imageUrl1}
                imageTitle={"Фото 1"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl2"}
                imageUrl={imageUrl2}
                imageTitle={"Фото 2"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl3"}
                imageUrl={imageUrl3}
                imageTitle={"Фото 3"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl4"}
                imageUrl={imageUrl4}
                imageTitle={"Фото 4"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl5"}
                imageUrl={imageUrl5}
                imageTitle={"Фото 5"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl6"}
                imageUrl={imageUrl6}
                imageTitle={"Фото 6"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
              <ProductSmallImage
                imageName={"imageUrl7"}
                imageUrl={imageUrl7}
                imageTitle={"Фото 7"}
                handleImage={this.handleImage}
                handleDeleteImage={this.handleDeleteImage}
                handleChangeMainImage={this.handleChangeMainImage}
                editMode={editMode}
              />
            </div>
            <div className="upload-btn-wrapper-main product-main-image  ">
              <div className="product-main">
                <div
                  className="product-image-main"
                  style={{
                    backgroundImage: `url(${mainImageUrl})`,
                  }}
                  alt=""
                />
              </div>
              {/* <div>
                <button className="upload-btn-main">MAIN Фото</button>
                <span
                  onClick={() => {
                    this.handleDeleteImage("imageUrl1");
                  }}
                >
                  XXX
                </span>
              </div> */}
              <input
                type="file"
                name="imageUrl1"
                placeholder="file"
                onChange={this.handleImage}
              />
            </div>

            <div className="product-title-container">
              <div className="title-brand">{title1}</div>
              <div className="title-name">{title2}</div>
              <div className="title-name2">{title3}</div>
              <div className="title-size">{title4}</div>
              <div className="title-producer">{title5}</div>
              <div className="title-code-tovara">{codeTovara}</div>
              <div
                className={`${
                  discountPrice !== "" ? "line-through" : ""
                } title-price`}
              >
                {price} грн.
              </div>
              <div className="title-discount-price">{discountPrice} грн.</div>
              <div>
                Знижка-{((price - discountPrice) / discountPrice) * 100}%
              </div>
              {editMode === true && (
                <div className="edit-group">
                  {/*********   name="title1"   ************/}

                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="title1"
                      label="Brand"
                      value={title1}
                      onChange={this.handleChangeStateByName}
                    />

                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title1")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="title2"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="title2"
                      label="Title2"
                      value={title2}
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title2")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="title3"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="title3"
                      label="Title3"
                      value={title3}
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title3")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="title4"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="title4"
                      label="Title4"
                      value={title4}
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title4")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="title5"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="title5"
                      label="Title5"
                      value={title5}
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("title5")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="price"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="price"
                      value={price}
                      label="Price"
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("price")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="discountPrice"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="discountPrice"
                      value={discountPrice}
                      label="Discount Price"
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("discountPrice")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="codeTovara"   ************/}
                  <div className="edit-field-container">
                    <FormInput
                      type="text"
                      name="codeTovara"
                      value={codeTovara}
                      label="Kod Tovara"
                      onChange={this.handleChangeStateByName}
                    />
                    <button
                      className="x-button"
                      onClick={() => this.handleDiscard("codeTovara")}
                    >
                      Отмена
                    </button>
                  </div>
                  {/*********   name="novinka"   ************/}
                  <div className="edit-field-container">
                    <label htmlFor="novinka">Novinka</label>
                    <input
                      id="novinka"
                      type="checkbox"
                      name="novinka"
                      value={novinka}
                      checked={novinka}
                      onChange={() => this.setState({ novinka: !novinka })}
                    />
                  </div>
                  <button
                    className="x-button"
                    onClick={() => this.handleSubmitAll()}
                  >
                    Submit TITLE
                  </button>
                </div>
              )}
            </div>
          </div>

          <Collections
            id={this.props.id}
            collectionsArray={collectionsArray}
            arrayNavbar={arrayNavbar}
            changeShowMenu={this.changeShowMenu}
            showMenu={this.state.showMenu}
            title={title}
            price={price}
            discountPrice={discountPrice}
            imageUrl1={imageUrl1}
            imageUrl2={imageUrl2}
            createdAt={createdAt}
            novinka={novinka}
            titleCode={titleCode}
          />
          <div>
            <button>EXIT</button> {/**/}
          </div>
          {editMode === true && (
            <button onClick={this.changeShowMenu}>ADD COLLECTION</button>
          )}
          <div>
            <button onClick={() => this.setState({ editMode: true })}>
              EDIT
            </button>{" "}
            {/**/}
          </div>
        </div>
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
