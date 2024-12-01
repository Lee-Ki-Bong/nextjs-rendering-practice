import React, { Suspense } from "react";
import StaticComponent from "@/components/StaticComponent";
import DynamicComponent from "@/components/DynamicComponent";
import { Skeleton } from "@/components/ui/skeleton";

// eslint-disable-next-line camelcase
export const experimental_ppr = true;

const Page = () => {
  return (
    <>
      {/* 정적 콘텐츠 */}
      <StaticComponent />

      {/* 동적 콘텐츠 (클라이언트에서 데이터 로드) */}
      <Suspense fallback={<Skeleton className="custom-main rounded-full" />}>
        <DynamicComponent />
      </Suspense>
    </>
  );
};

export default Page;
