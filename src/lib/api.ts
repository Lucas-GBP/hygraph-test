import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clhfacptn0ezq01uf66za6dy7/master"
);

export async function getAllSlugs() {
  const { posts }: { posts: { slug: string }[] } = await hygraph.request(`{
    posts {
      slug
    }
  }`);

  return posts.map((item) => {
    return item.slug;
  });
}

export async function getAllPostsIndex() {
  const { posts }: { posts: { slug: string; title: string }[] } =
    await hygraph.request(`{
      posts {
        slug
        title
      }
    }`);

  return posts;
}

export async function getPostBySlug(slug: string) {
  const {
    post,
  }: {
    post: { title: string; content: string };
  } = await hygraph.request(`
  {
    post(where: {slug: "${slug}"}) {
      title
      content
    }
  }`);

  return post;
}
