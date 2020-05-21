import React from "react";
import { firestore } from "../firebase/FirebaseUtils";

const TPost = ({ id, title, content, user, createdAt, stars, comments }) => {
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();

  return (
    <article className="Post">
      <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
        <div>{id}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
              ⭐️
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
              🙊
            </span>
            {comments}
          </p>
        </div>
        <div>
          <button className="star">Star</button>
          <button className="delete" onClick={remove}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default TPost;
