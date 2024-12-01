import Link from "next/link";
import React from "react";

const RenderingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <Link href="/" className="custom-button">
          HOME
        </Link>
      </div>
      <div className="custom-main p-20">{children}</div>
    </>
  );
};

export default RenderingLayout;
