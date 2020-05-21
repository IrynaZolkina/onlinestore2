import React from "react";
import "./homepage.css";
import Directory from "../../components/directory/Directory";
import Slider from "../../utilities/slider/Slider";
import Slider3in8 from "../../utilities/slider-3-un-8-sec/Slider3in8";

const HomePage = () => {
  return (
    <div className="homepage1">
      <Slider />
      <Slider3in8 />
      <Directory number={1} directoryName={"ДЛЯ ЖіНок".toUpperCase()} />
      <Directory number={2} directoryName={"для чоловіків".toUpperCase()} />
    </div>
  );
};

export default HomePage;
