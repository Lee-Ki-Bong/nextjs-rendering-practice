import React, { Suspense } from "react";
import StaticComponent from "@/components/StaticComponent";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

// eslint-disable-next-line camelcase
export const experimental_ppr = true;

const LazyComponent = dynamic(() => import("@/components/DynamicComponent"));

const Page = async () => {
  return (
    <>
      {/* 정적 콘텐츠 */}
      <StaticComponent />

      {/* 동적 콘텐츠 (클라이언트에서 데이터 로드) */}
      <Suspense
        fallback={
          <div className="custom-main space-y-3">
            <Skeleton className="h-[325px] w-[450px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[450px]" />
              <Skeleton className="h-4 w-[400px]" />
            </div>
          </div>
        }
      >
        <LazyComponent id={"5"} />
      </Suspense>
    </>
  );
};

export default Page;
