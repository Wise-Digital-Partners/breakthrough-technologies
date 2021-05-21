import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const WhyUs = ({ className }) => {
   const data = useStaticQuery(graphql`
      {
         docuBank: file(relativePath: { eq: "repeating/logos/DocuBank-Logo.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         elderLawCollege: file(relativePath: { eq: "repeating/logos/ElderLawCollege-logo.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         personalFamilyLaw: file(relativePath: { eq: "repeating/logos/PFL-Logo.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
         wealthCounsel: file(relativePath: { eq: "repeating/logos/Wealth-Counsel-logo.jpg" }) {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
            }
         }
      }
   `);

   return (
      <section className={`${className || ""}`}>
         <div className="container">
            <header className="text-center mb-10 md:mb-14">
               <p className="font-heading text-3xl text-gray-500 font-bold">Member Of</p>
            </header>
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-12 md:space-y-0">
               <GatsbyImage image={data.personalFamilyLaw.childImageSharp.gatsbyImageData} alt="Personal Family Law logo" className="w-[250px]" />
               <GatsbyImage image={data.elderLawCollege.childImageSharp.gatsbyImageData} alt="Elder Law College logo" className="w-[204px]" />
               <GatsbyImage image={data.docuBank.childImageSharp.gatsbyImageData} alt="DocuBank logo" className="w-[167px]" />
               <GatsbyImage image={data.wealthCounsel.childImageSharp.gatsbyImageData} alt="Wealth Counsel logo" className="w-[100px]" />
            </div>
         </div>
      </section>
   );
};

export default WhyUs;
