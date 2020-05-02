import React from "react";
import "./datemanager.css";

const DataManager = () => {
  const date = new Date().toString();
  const month = date.slice(4, 7);
  let monthNum = "";
  switch (month) {
    case "Jen":
      monthNum = "сiчень";
      break;
    case "Feb":
      monthNum = "лютий";
      break;
    case "Mar":
      monthNum = "березень";
      break;
    case "Apr":
      monthNum = "квiтень";
      break;
    case "May":
      monthNum = "травень";
      break;
    case "Jun":
      monthNum = "червень";
      break;
    case "Jul":
      monthNum = "липень";
      break;
    case "Aug":
      monthNum = "серпень";
      break;
    case "Sep":
      monthNum = "вересень";
      break;
    case "Oct":
      monthNum = "жовтень";
      break;
    case "Nov":
      monthNum = "листопад";
      break;
    case "Dec":
      monthNum = "грудень";
      break;
    default:
      break;
  }

  const weekDay = date.slice(0, 3);
  let dayn = "";

  switch (weekDay) {
    case "Tue":
      dayn = "вiвторок";
      break;
    case "Mon":
      dayn = "понедiлок";
      break;
    case "Wen":
      dayn = "середа";
      break;
    case "Thu":
      dayn = "четверг";
      break;
    case "Fri":
      dayn = "п’ятниця";
      break;
    case "Sat":
      dayn = "субота";
      break;
    case "Sun":
      dayn = "недiля";
      break;

    default:
      break;
  }

  return (
    <div>
      <div className="date-format-1">
        {monthNum.toUpperCase()}
        {" - "}
        {date.slice(8, 10)}
        {" - "}
        {date.slice(11, 16).toUpperCase()}
      </div>
      <div>----------</div>
      <div>{dayn.toUpperCase()}</div>
    </div>
  );
};

export default DataManager;
