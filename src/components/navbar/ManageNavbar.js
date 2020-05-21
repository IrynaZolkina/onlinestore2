import React from "react";
import { firestore } from "../../firebase/FirebaseUtils";
import firebase from "../../firebase/FirebaseUtils";

const Test = () => {
  return <div className="dark">OOOOOOOOOOOOOOOOOOO</div>;
};

const ManageNavbar = () => {
  return (
    <div>
      <div className="ov">
        <div className="nnn"> hello</div>
        <Test />
      </div>
      <input
        className="input-file"
        type="file"
        onChange={(e) => {
          const uploadTask = firebase
            .storage()
            .ref()
            .child("/kapris/navbar/makeup" + e.target.files[0].name)
            /*.child("/kapris/kapris/" + e.target.files[0].name)*/
            /*.child("/kapris/top-sales/" + e.target.files[0].name)*/
            /*.child("/kapris/homepage/" + e.target.files[0].name)*/
            /* .child("/Create Account Images/" + e.target.files[0].name) */
            .put(e.target.files[0]);

          uploadTask.on(
            "state_changed",
            function (snapshot) {
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            function (error) {},
            function () {
              uploadTask.snapshot.ref
                .getDownloadURL()
                .then(function (downloadURL) {
                  console.log(downloadURL);
                });
            }
          );
        }}
      />
    </div>
  );
};

export default ManageNavbar;
