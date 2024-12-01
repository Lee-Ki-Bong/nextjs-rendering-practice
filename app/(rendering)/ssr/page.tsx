import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/posts";
import React from "react";

// API 호출을 위한 함수
const fetchPost = async (): Promise<Post> => {
  {
    /**
      cache: "no-store"란?
      설명: 데이터가 절대 캐싱되지 않도록 설정합니다.
      브라우저, 중간 프록시 서버, Next.js 내부 캐싱을 포함하여 데이터를 캐싱하지 않습니다.
      항상 최신 데이터를 서버에서 직접 가져옵니다.
      사용 사례:
      데이터가 항상 최신 상태여야 하는 경우.
      예: 실시간 데이터(주식 가격, 채팅 메시지 등).
 */
  }
  const response = await fetch("http://localhost:4000/posts/2", {
    cache: "no-store", // no-store는 데이터가 캐싱되지 않도록 설정하며, 서버마다 데이터를 새로 가져옵니다. 세 데이터를 보장.
  });

  // SSR의 목적과 서버 환경을 고려했을 때 명시적으로 Error를 던지는 것이 더 적합한 경우가 많습니다.
  if (!response.ok)
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`,
    );
  const data: Post = await response.json();
  return data;
};

const page = async () => {
  const data = await fetchPost();

  return (
    <>
      <PostComponent post={data} />
    </>
  );
};

export default page;
