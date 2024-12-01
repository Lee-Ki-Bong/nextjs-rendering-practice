"use client";

import PostComponent from "@/components/PostComponent";
import { Post } from "@/types/posts";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

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

  if (loading)
    return (
      <div className="custom-main space-y-3">
        <Skeleton className="h-[325px] w-[450px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[450px]" />
          <Skeleton className="h-4 w-[400px]" />
        </div>
      </div>
    );

  if (!data) return <p>No Data</p>;

  return (
    <>
      <PostComponent post={data} />
    </>
  );
};

export default DynamicComponent;
