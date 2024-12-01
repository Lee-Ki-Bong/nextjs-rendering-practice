import Link from "next/link";
import renderingTree from "./utils/renderingTree";

export default function Home() {
  return (
    <div className="custom-main">
      <h1 className="h1">Next.js Methods</h1>
      <div className="m-20 flex flex-col gap-10">
        {renderingTree.map(({ type, methods }) => (
          <div key={type}>
            <h2 className="h2">{type}</h2>
            <div className="flex flex-row gap-5">
              {methods.map(({ name, slug }) => (
                <Link key={slug} href={`/${slug}`} className="custom-button">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
