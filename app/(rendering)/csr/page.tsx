"use client"; // 이 파일이 클라이언트 컴포넌트임을 명시. Next.js 13 이상의 app 디렉토리에서 필요.

import { Post } from "@/types/posts"; // Post 데이터 타입을 정의한 파일을 가져옴.
import React, { useEffect, useState } from "react"; // React 훅들을 가져옴.

const page = () => {
  // 상태 변수 선언
  const [data, setData] = useState<Post | null>(null); // API에서 가져온 데이터를 저장할 상태.
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 저장.

  // useEffect 훅: 컴포넌트가 마운트될 때 한 번 실행.
  useEffect(() => {
    // API 호출
    fetch("http://localhost:4000/posts/1") // JSON Server에서 데이터를 가져옴.
      .then((response) => response.json()) // 응답 데이터를 JSON 형식으로 변환.
      .then((data: Post) => {
        setData(data); // 변환된 데이터를 상태에 저장.
        setLoading(false); // 로딩 상태를 false로 변경.
      })
      .catch((error) => {
        console.error("Error:", error); // API 호출 중 오류 발생 시 콘솔에 출력.
        setLoading(false); // 오류 발생 시에도 로딩 상태를 false로 변경.
      });
  }, []); // 빈 배열: 이 코드 블록은 컴포넌트가 처음 렌더링될 때 한 번만 실행.

  // 로딩 상태일 때 출력할 UI
  if (loading) return <p>Loading...</p>;

  // 데이터가 없을 때 출력할 UI
  if (!data) return <p>No Data</p>;

  // 정상적으로 데이터를 로드했을 때 출력할 UI
  return (
    <div className="custom-main">
      {/* 데이터의 title을 렌더링 */}
      <h1 className="h1">{data.title}</h1>

      {/* 데이터의 body를 렌더링 */}
      <div className="custom-contents-area">
        <p className="custom-contents-text">{data.body}</p>
      </div>
    </div>
  );
};

export default page; // 이 컴포넌트를 기본 내보내기.
