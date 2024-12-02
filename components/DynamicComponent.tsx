import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/posts";
import React from "react";

// 데이터 패칭 함수
const fetchPost = async (id: string): Promise<Post> => {
  const response = await fetch(`http://localhost:4000/posts/${id}`, {
    cache: "no-store", // 서스펜스 스켈레톤 보기위해서 데이터 최신화를 위해 캐시 비활성화 (필요에 따라 조정)
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Post = await response.json();
  if (!data.id || !data.title || !data.body) {
    throw new Error("Invalid data structure");
  }
  return data;
};

const DynamicComponent = async ({ id }: { id: string }) => {
  const post: Post = await fetchPost(id);
  return (
    <>
      <PostComponent post={post} />
    </>
  );
};

export default DynamicComponent;
