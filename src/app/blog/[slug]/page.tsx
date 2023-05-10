import { getAllSlugs, getPostBySlug } from "@/lib/api";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();

  return slugs.map((item) => ({ slug: item }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getPostBySlug(params.slug);
  console.log(data);

  return (
    <main>
      title: {data.title}
      <br />
      content: {data.content}
      <br />
    </main>
  );
}
