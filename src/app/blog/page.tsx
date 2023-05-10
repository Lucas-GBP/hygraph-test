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
        {products.map(({ slug, title }, index) => {
          return (
            <li key={index}>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
