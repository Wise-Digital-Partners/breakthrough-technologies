import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlogPostPreviewGrid from "../Blog/BlogPostGrid";
import GraphQLErrorList from "../Blog/graphql-error-list";
import { mapEdgesToNodes } from "../../lib/helpers";

const RecentBlogPosts = ({ props, heading, className }) => {
  const data = useStaticQuery(graphql`
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
  `);

  const errors = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <section className={`bg-white ${className || ""}`}>
      <div className="container">
        {heading === false ? null : (
          <header className="mb-18 text-center">
            <h2>News & Resources</h2>
          </header>
        )}
        {postNodes && postNodes.length > 0 && (
          <BlogPostPreviewGrid nodes={postNodes} />
        )}
      </div>
    </section>
  );
};

export default RecentBlogPosts;
