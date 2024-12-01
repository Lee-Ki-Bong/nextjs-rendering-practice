import Link from "next/link";
import React from "react";

const RenderingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mt-5 flex items-center justify-center">
        <Link href="/" className="custom-button">
          HOME
        </Link>
      </div>
      <div className="custom-main p-20">{children}</div>
    </>
  );
};

export default RenderingLayout;
