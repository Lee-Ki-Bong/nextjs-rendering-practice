import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/posts";
import React from "react";

// 요청이 들어올 때, 최대 60초 동안 캐시된 페이지를 갱신합니다.
export const revalidate = 20;

const fetchPost = async (): Promise<Post> => {
  const response = await fetch("http://localhost:4000/posts/3");

  if (!response.ok)
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`,
    );

  const data: Post = await response.json();
  return data;
};

const Page = async () => {
  const data = await fetchPost();

  return (
    <>
      <PostComponent post={data} />
    </>
  );
};

export default Page;
