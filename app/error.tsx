"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const { message } = error;
  return (
    <div className="custom-main gap-5">
      <h1 className="h1">오류가 발생했습니다!</h1>
      <p>{message}</p>
      <button onClick={() => reset()} className="custom-button !bg-red-500">
        다시 시도
      </button>
    </div>
  );
}
