import Link from "next/link";
import { getAllPostsIndex } from "@/lib/api";

export const metadata = {
  title: "Blog",
  description: "Front page for a blog",
};

export default async function Page() {
  const products = await getAllPostsIndex();

  return (
    <main>
      <ul>
        {products.map(({ slug, name }, index) => {
          return (
            <li key={index}>
              <Link href={`/blog/${slug}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
