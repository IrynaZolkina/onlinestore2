import React from "react";
import "./sliderRadio.css";

const SliderRadio = () => {
  return (
    <div className="bb">
      <div className="slidershow middle">
        <div className="slides">
          <input type="radio" name="r" id="r1" />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <input type="radio" name="r" id="r4" />
          <input type="radio" name="r" id="r5" />
          <div className="slide s1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a"
              alt=""
            />
          </div>
          <div classNae="slide ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b"
              alt=""
            />
          </div>
          <div className="slide ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp3.jpg?alt=media&token=17c5be2a-7722-4dc8-992c-8ee66c73b77f"
              alt=""
            />
          </div>
          <div className="slide ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp5.jpg?alt=media&token=f0937e65-d0c2-40a3-ace4-e7365aa7e7ff"
              alt=""
            />
          </div>
          <div className="slide ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg52.jpg?alt=media&token=a0bf48c4-7706-4711-b560-aeeccb2ac78c"
              alt=""
            />
          </div>
        </div>
        <div className="navigation">
          <label htmlFor="r1" className="bar"></label>
          <label htmlFor="r2" className="bar"></label>
          <label htmlFor="r3" className="bar"></label>
          <label htmlFor="r4" className="bar"></label>
          <label htmlFor="r5" className="bar"></label>
        </div>
      </div>

      <div className="container">
        <div className="camera_wrap">
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp1.png?alt=media&token=1d8e9e89-424c-4aeb-b709-2d304c03974a"></div>

          <div data-src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp2.jpg?alt=media&token=39ba9c81-0389-43dc-9d0d-8e80a405da1b"></div>
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp3.jpg?alt=media&token=17c5be2a-7722-4dc8-992c-8ee66c73b77f"></div>
          <div
            data-src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fhp5.jpg?alt=media&token=f0937e65-d0c2-40a3-ace4-e7365aa7e7ff"
            alt=""
          ></div>
          <div
            data-src="https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg52.jpg?alt=media&token=a0bf48c4-7706-4711-b560-aeeccb2ac78c"
            alt=""
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SliderRadio;
