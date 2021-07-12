import React from "react";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import BlogPostPreviewList from "../components/Blog/BlogPostList";
import BlogPostFeaturedList from "../components/Blog/BlogPostFeaturedList";
import GraphQLErrorList from "../components/Blog/graphql-error-list";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

export const query = graphql`
  {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            asset {
              gatsbyImageData
            }
            alt
          }
          categories {
            _id
            title
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      <SearchEngineOptimization
        title="News & Resources | Breakthrough Technologies"
        description="Browse news and resources from Breakthrough Technologies here. We're a sustainable technology company that builds innovative industrial products."
        // openGraphImage={data.openGraphImage.publicURL}
        // twitterOpenGraphImage={data.twitterOpenGraphImage.publicURL}
      />
      <section className="pt-16 mb-20 md:mb-32">
        <div className="container">
          {/* <h1>News & Resources</h1> */}
          {/* <div className="mb-32">
            {postNodes && postNodes.length > 0 && (
              <BlogPostFeaturedList nodes={postNodes} />
            )}
          </div> */}

          <header className="mb-18">
            <h1>News & Resources</h1>
            {/* <h2>Recent Articles</h2> */}
          </header>
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreviewList nodes={postNodes} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePage;
