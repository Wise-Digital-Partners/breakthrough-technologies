import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const WhyUs = ({ className, headingLevel }) => {
  const data = useStaticQuery(graphql`
    {
      phoneIcon: file(
        relativePath: { eq: "repeating/faq/FAQ Phone icon.svg" }
      ) {
        publicURL
      }
      messageIcon: file(
        relativePath: { eq: "repeating/faq/FAQ Message icon.svg" }
      ) {
        publicURL
      }
    }
  `);

  const questionsAnswers = [
    {
      question: "Before I Hire an Estate Planning Lawyer, What Should I Know?",
      answer:
        "Many estate planning attorneys take a “one-size fits all” approach with their clients; they do this so that they can work with as many people as possible in a short period of time. In addition to leaving the client with a totally cold and impersonal experience, this way of planning can lead to unintended results in the long run. Breakthrough Technologies is different.",
    },
    {
      question: "How Do You Calculate Fees?",
      answer:
        "All of our fees are fixed fees agreed to in advance, so there are never any surprises. At our initial meeting, you will select the level of planning and fee that works best for you.",
    },
    {
      question: "What Does Your Estate Planning Provide?",
      answer:
        "We don’t just prepare a set of legal documents for you and send you on your way. We make sure your assets are owned in the right way, your kids’ well-being is properly planned for, everyone you’ve named in your plan knows what to do if anything happens to you, and make sure that none of your assets become part of the $58 billion of unclaimed assets across the United States.",
    },
    {
      question: "What Does a Family Wealth Planning Session Cover?",
      answer:
        "During our meeting together, we will guide you to look at what would happen for your loved ones and to your assets if something were to happen to you. Then, we’ll review what you want to happen and help you create a roadmap to implement your plan as easily as possible. Clients who have procrastinated for years routinely tell us how easy and seamless we make this process.",
    },
    {
      question: "Why Should I Schedule the Family Wealth Planning Session?",
      answer:
        "Even if you never do any planning with us, the Family Wealth Planning Session alone is a hugely valuable process, because you will create a full inventory of your assets and ensure your loved ones knows what you have. Then, when we meet in person, we will review everything you own, and discuss everyone you love, and you will understand exactly what would happen in the event of your death or incapacity.",
    },
    {
      question: "What Happens After I Schedule My Appointment?",
      answer:
        "After scheduling your appointment, you will receive your Estate Planning Worksheet and other important information that you will want to review prior to your personal Family Wealth Planning Session. You will return your Estate Planning Worksheet to our office at least 3 days prior to your Session or we will need to reschedule your Session. Feel free to call the office at any time if you need assistance completing your Worksheet, or have any questions.",
    },
    {
      question: "What Should I Expect During Our Meeting?",
      answer: (
        <div>
          <p>
            On the day of your meeting, please expect to spend up to 2 hours
            with your attorney. The initial meeting with your attorney has two
            purposes:
          </p>
          <ul className="list-disc ml-4 mb-6">
            <li className="mb-2">
              To identify whether there is a good fit between you and our
              attorney who will become your Personal Family Lawyer.
            </li>
            <li>
              To educate you about the law and what would happen if you died
              with your current (or no) plan in place.
            </li>
          </ul>
          <p>
            By looking at what would happen under your current plan, you can
            identify what you would want to happen differently and then together
            with your Personal Family Lawyer’s guidance make the decisions that
            are necessary (including choosing your own fee) to give you the
            peace of mind of knowing your loved ones would stay out of court,
            chaos and conflict, if something happens to you.
          </p>
        </div>
      ),
    },
  ];

  const HeadingTag = headingLevel;

  return (
    <section className={`${className || ""}`}>
      <div className="container">
        <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-20">
          <div className="md:col-start-1 md:col-span-5">
            <HeadingTag className="mb-8">FAQs</HeadingTag>
            <div className="flex mb-7">
              <img
                src={data.phoneIcon.publicURL}
                alt="Phone icon"
                className="mr-5"
              />
              <div>
                <p className="font-display text-mobile-5xl md:text-5xl mb-1">
                  Call Us
                </p>
                <a
                  href="tel:619-987-3532"
                  className="text-primary-600 font-semibold"
                >
                  (619) 987-3532
                </a>
              </div>
            </div>
            <div className="flex">
              <img
                src={data.messageIcon.publicURL}
                alt="Phone icon"
                className="mr-5"
              />
              <div>
                <p className="font-display text-mobile-5xl md:text-5xl mb-1">
                  Email Us
                </p>
                <a
                  href="mailto:info@consciouslegal.law"
                  className="text-primary-600 font-semibold"
                >
                  info@consciouslegal.law
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-end-13 md:col-span-7">
            <Accordion
              allowZeroExpanded={true}
              className="border-t border-solid border-black border-opacity-30"
            >
              {questionsAnswers.map((faq, i) => {
                return (
                  <div key={i}>
                    <AccordionItem
                      className="border-b border-solid border-black border-opacity-30 pt-6 pb-5"
                      uuid={i}
                    >
                      <AccordionItemButton className="flex items-center focus:outline-none">
                        <AccordionItemState>
                          {(state) => {
                            const icon = state.expanded
                              ? "fa-minus"
                              : "fa-plus";
                            return (
                              <i
                                className={`fal ${icon} text-xl text-black mr-6`}
                              ></i>
                            );
                          }}
                        </AccordionItemState>

                        <p className="font-heading text-lg font-bold text-gray-800 mb-0">
                          {faq.question}
                        </p>
                      </AccordionItemButton>
                      <AccordionItemPanel className="pt-4 pl-10 animate-fadeIn">
                        <p className="mb-0">{faq.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </div>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
