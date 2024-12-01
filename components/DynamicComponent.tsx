"use client";

import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/posts";
import React, { useEffect, useState } from "react";

const DynamicComponent = () => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  // useEffect 훅: 컴포넌트가 마운트될 때 한 번 실행.
  useEffect(() => {
    fetch("http://localhost:4000/posts/5")
      .then((response) => response.json())
      .then((data: Post) => {
        if (!data.id || !data.title || !data.body) {
          throw new Error("Invalid data structure");
        }
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!data) return <p>No Data</p>;

  return (
    <>
      <PostComponent post={data} />
    </>
  );
};

export default DynamicComponent;
