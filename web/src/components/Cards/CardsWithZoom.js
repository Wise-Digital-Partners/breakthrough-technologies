import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Cards = ({ className, cards, cardHeadingLevel, cardHeadingSize, cardTextSize, columnCount, columnGap }) => {
   const CardHeadingTag = cardHeadingLevel;
   return (
      <div className={`${className}`}>
         <div className={`grid ${columnCount} ${columnGap}`}>
            {cards.map((card) => {
               return (
                  <div className="group relative" key={card.id}>
                     <div className="overflow-hidden mb-6">
                        <GatsbyImage
                           image={card.image}
                           alt={card.heading}
                           className="transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
                        />
                     </div>
                     <CardHeadingTag className={cardHeadingSize}>{card.heading}</CardHeadingTag>
                     <p className={`mb-0 ${cardTextSize}`}>{card.text}</p>
                     <AniLink fade to={card.link}>
                        <span className="link-overlay"></span>
                     </AniLink>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Cards;
