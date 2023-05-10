import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clhfacptn0ezq01uf66za6dy7/master"
);

export async function serverRes() {
  return await hygraph.request(`{
    Post {
        slug
        name
      }
    }`);
}

export async function getAllPostsIndex() {
  const { Post }: { Post: { slug: string; title: string }[] } =
    await hygraph.request(`{
      Post {
        slug
        title
      }
    }`);

  return Post;
}

export async function getAllSlugs() {
  const { Post }: { Post: { slug: string }[] } = await hygraph.request(`{
    Post {
        slug
      }
    }`);

  return Post.map((item) => {
    return item.slug;
  });
}

export async function getPostBySlug(slug: string) {
  const {
    Post,
  }: {
    Post: { title: string; content: { markdown: string } };
  } = await hygraph.request(
    `
        query ProductPageQuery($slug: String!) {
          Post(where: { slug: $slug }) {
            title
            content {
              markdown
            }
          }
        }`,
    {
      slug: slug,
    }
  );

  return Post;
}
