import Link from "next/link";

export default function Home() {
  const renderingMethods = ["ssg", "ssr", "csr", "isr", "ppr", "csg"];

  return (
    <div className="custom-main">
      <h1 className="text-3xl">Next.js Rendering Demo</h1>
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
