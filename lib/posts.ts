import graphqlRequest from "./graphqlRequest";

export async function getAllPosts(category?: string) {
  let categoryFilter = "";
  if (category) {
    categoryFilter = `categoryName: "${category}", `;
  }

  const query = {
    query: `query getAllPosts {
      posts(first: 100, where: { ${categoryFilter}orderby: { field: TITLE, order: ASC } }) {
        nodes {
          date
          slug
          title
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts;
  return allPosts;
}

export async function getSinglePost(slug: string) {
  const query = {
    query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
              content(format: RENDERED)
              date
              excerpt(format: RENDERED)
              modified
              slug
              title(format: RENDERED)
              databaseId
              featuredImage {
                node {
                  mediaDetails {
                    sizes {
                      sourceUrl
                      width
                      height
                    }
                  }
                }
              }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }`,
  };

  const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;

  return singlePost;
}

export async function getTeam() {
  const query = {
    query: `query getTeam {
    posts(first: 100 where: { categoryName: "equipo" } ) {
      nodes {
        equipo {
          cargo
          fieldGroupName
          prioridad
          nombre
          imagen {
          node {
            altText
            mediaDetails {
              file
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }

}
`,
  };

  const resJson = await graphqlRequest(query);
  const team = resJson.data.posts;

  return team;
}

export async function getCompanies() {
  const query = {
    query: `query getCompanies {
  posts(first: 100, where: {categoryName: "empresas"}) {
    nodes {
      empresas {
        thumbnail {
          node {
            mediaDetails {
              sizes {
                height
                sourceUrl
                width
              }
            }
          }
        }
        description
        title
      }
      slug
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const companies = resJson.data.posts;

  console.log(companies);

  return companies;
}
