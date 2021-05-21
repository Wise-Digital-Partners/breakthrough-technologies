import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./AuthorList";
import PortableText from "./portableText";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function BlogPost(props) {
  const {
    _rawBody,
    authors,
    categories,
    title,
    mainImage,
    publishedAt,
  } = props;
  return (
    <article>
      <div className="container">
        <div>
          <h1>{title}</h1>

          {mainImage && mainImage.asset && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
            />
          )}

          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
        <aside>
          {publishedAt && (
            <div>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Mo, yyyy")}
            </div>
          )}
          {authors && <AuthorList items={authors} title="Authors" />}
          {categories && (
            <div>
              <h3>Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category._id}>{category.title}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}

export default BlogPost;
