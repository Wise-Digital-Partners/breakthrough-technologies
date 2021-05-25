import { getBlogUrl } from "../../lib/helpers";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import PortableText from "./portableText";
import React from "react";
// import { format } from "date-fns";
import { GatsbyImage } from "gatsby-plugin-image";

function BlogPostPreviewGrid(props) {
  return (
    <AniLink fade to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className="group">
        <div className="overflow-hidden mb-5">
          {props.mainImage && props.mainImage.asset && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
              className="block transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
            />
          )}
        </div>
        <div>
          {props.categories && (
            <>
              {props.categories.slice(0, 1).map((category) => (
                <div
                  className="font-light tracking-[0.3em] uppercase mb-2"
                  key={category._id}
                >
                  {category.title}
                </div>
              ))}
            </>
          )}
          <p className="font-heading text-xl font-bold text-gray-900 mb-0">
            {props.title}
          </p>
          {/* {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
          {/* <div>{format(new Date(props.publishedAt), "MMMM Mo, yyyy")}</div> */}
        </div>
      </div>
    </AniLink>
  );
}

export default BlogPostPreviewGrid;
