import React from "react";
/*import Post from "./Post";*/
import AddPost from "./AddPost";
import Post from "./Post";

const Posts = ({ posts, onCreate, onRemove }) => {
  return (
    <section className="Posts">
      <h1>post</h1>
      <AddPost onCreate={onCreate} />
      {posts.map((post) => (
        <Post {...post} key={post.id} onRemove={onRemove} />
      ))}
    </section>
  );
};
export default Posts;
