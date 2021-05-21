import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { getBlogUrl } from "../../lib/helpers";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import PortableText from "./portableText";
// import { format } from "date-fns";
import ButtonWithIcon from "../Button/ButtonWithIcon";
import TextDecorative from "../Text/TextDecorative";

function BlogPostPreviewGrid(props) {
  return (
    <>
      <div className="grid md:grid-cols-2 md:space-x-10 lg:space-x-20 items-center group">
        <div>
          {props.mainImage && props.mainImage.asset && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div>
          <TextDecorative text="Featured News" />
          {/* {props.categories && (
          <>
            {props.categories.slice(0, 1).map((category) => (
              <div
                className="font-light tracking-widest uppercase mb-2"
                key={category._id}
              >
                {category.title}
              </div>
            ))}
          </>
        )} */}
          <p className="font-heading text-mobile4xl md:text-4xl font-bold text-gray-900">
            {props.title}
          </p>

          {props._rawExcerpt && (
            <>
              <PortableText blocks={props._rawExcerpt} />
            </>
          )}

          <ButtonWithIcon
            href={getBlogUrl(props.publishedAt, props.slug.current)}
            text="Read Article"
          />
          {/* <div>{format(new Date(props.publishedAt), "MMMM Mo, yyyy")}</div> */}
        </div>
      </div>
    </>
  );
}

export default BlogPostPreviewGrid;
