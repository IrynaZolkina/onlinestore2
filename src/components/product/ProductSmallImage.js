import React from "react";

const ProductSmallImage = (props) => {
  const { imageUrl, imageName } = props;
  //console.log("++++", imageUrl);
  if (imageUrl !== "" || props.editMode === true) {
    return (
      <div className="image-group">
        <div className=" flex-item upload-btn-wrapper">
          <button className="upload-btn">{props.imageTitle}</button>
          <input
            type="file"
            name={imageName}
            placeholder="file"
            onChange={props.handleImage}
          />
          <button
            onClick={() => props.handleDeleteImage(imageName)}
            className="upload-btn"
          >
            X
          </button>
        </div>

        <div className="product-image-item">
          <div
            className="product-image-small"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
            alt=""
            onClick={() => props.handleChangeMainImage({ imageUrl })}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProductSmallImage;
