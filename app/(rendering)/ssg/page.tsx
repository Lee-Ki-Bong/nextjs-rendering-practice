import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/posts";
import React from "react";

const fetchPosts = async (): Promise<Post> => {
  const response = await fetch("http://localhost:4000/posts/4", {
    // Next.js에서는 데이터 페칭을 최적화하기 위해 force-cache를 기본 캐싱 전략으로 사용합니다. (디폴트 값)
    cache: "force-cache", // 데이터가 가능한 캐시에서만 가져오도록 강제합니다.
  });

  if (!response.ok)
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`,
    );

  const post: Post = await response.json();
  return post;
};

const Page = async () => {
  const post = await fetchPosts(); // 빌드 시 데이터를 가져옵니다.
  return <PostComponent post={post} />;
};

export default Page;
