import React from "react";

const StaticComponent = () => {
  return (
    <div className="rounded-md bg-slate-500 p-3 text-white">
      <h2 className="h2">Static Content</h2>
      <p className="custom-contents-text">
        이 부분은 빌드 시 정적으로 미리 렌더링됩니다.
      </p>
    </div>
  );
};

export default StaticComponent;
