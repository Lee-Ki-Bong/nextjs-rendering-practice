import Link from "next/link";

export default function Home() {
  const renderingMethods = ["csr", "ssg", "isr", "ssr", "ppr", "csg"];

  return (
    <div className="custom-main">
      <h1 className="h1">Next.js Rendering Demo</h1>
      <div className="flex flex-row gap-5 m-20">
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
