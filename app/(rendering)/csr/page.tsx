"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/posts/1")
      .then((response) => response.json())
      .then((data) => {
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
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      <p>
        <strong>Title:</strong> {data.title}
      </p>
      <p>
        <strong>Body:</strong> {data.body}
      </p>
    </div>
  );
};

export default page;
