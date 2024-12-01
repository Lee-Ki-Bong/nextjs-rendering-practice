import React, { Suspense } from "react";
import StaticComponent from "@/components/StaticComponent";
import DynamicComponent from "@/components/DynamicComponent";

// eslint-disable-next-line camelcase
export const experimental_ppr = true;

const Page = () => {
  return (
    <>
      {/* 정적 콘텐츠 */}
      <StaticComponent />

      {/* 동적 콘텐츠 (클라이언트에서 데이터 로드) */}
      <Suspense fallback={<p>Loading dynamic content...</p>}>
        <DynamicComponent />
      </Suspense>
    </>
  );
};

export default Page;
