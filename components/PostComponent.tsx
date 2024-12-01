import { Post } from "@/types/posts";
import React from "react";

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <div className="custom-main">
      {/* 데이터의 title을 렌더링 */}
      <h1 className="h1">{post.title}</h1>

      {/* 데이터의 body를 렌더링 */}
      <div className="custom-contents-area">
        <p className="custom-contents-text">{post.body}</p>
      </div>
    </div>
  );
};

export default PostComponent;
