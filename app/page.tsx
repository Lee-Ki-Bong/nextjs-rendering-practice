import Link from "next/link";

export default function Home() {
  const renderingMethods = ["csr", "ssr", "isr", "csg", "ssg", "ppr"];

  return (
    <div className="custom-main">
      <h1 className="h1">Next.js Rendering Demo</h1>
      <div className="m-20 flex flex-row gap-5">
        {renderingMethods.map((renderingType) => (
          <Link
            key={renderingType}
            href={`/${renderingType}`}
            className="custom-button"
          >
            {renderingType}
          </Link>
        ))}
      </div>
    </div>
  );
}
