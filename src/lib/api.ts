import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(
    'https://api-eu-central-1.hygraph.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master'
);

export async function serverRes() {
    return await hygraph.request(`{
      products {
        slug
        name
      }
    }`);
}

export async function getAllPostsIndex(){
    const { products }:{products:{slug:string, name:string}[]} = await hygraph.request(`{
      products {
        slug
        name
      }
    }`);

    return products;
}

export async function getAllSlugs() {
    const {products}:{products:{slug:string}[]} = await hygraph.request(`{
      products {
        slug
      }
    }`);
    
    return products.map((item)=>{return item.slug});
}

export async function getPostBySlug(slug:string){
    const { product }:{product:{name:string, content:{markdown:string}, price:string}} = await hygraph.request(`
        query ProductPageQuery($slug: String!) {
          product(where: { slug: $slug }) {
            name
            content {
              markdown
            }
            price
          }
        }`,
        {
          slug: slug,
        }
    );

    return product
}
