import React from "react";
import TaddPost from "./TaddPost";
import TPost from "./TPost";

const Tposts = ({ posts }) => {
  return (
    <section className="Posts">
      <TaddPost />
      {posts.map((post) => (
        <TPost {...post} key={post.id} />
      ))}
    </section>
  );
};

export default Tposts;
