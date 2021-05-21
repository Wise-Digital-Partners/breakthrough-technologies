import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const Accordion = ({ title, children }) => {
   const [setActive, setActiveState] = useState("");
   const [setHeight, setHeightState] = useState("0px");
   const [setIcon, setIconState] = useState("fal fa-plus");

   const content = useRef(null);

   function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
      setIconState(setActive === "active" ? "fal fa-plus" : "fal fa-minus");
   }

   return (
      <ul className="submenu-parent overflow-hidden">
         <button className={`${setActive}`} onClick={toggleAccordion}>
            <i className={`${setIcon} text-xl text-white mr-2`} />
            {title}
         </button>
         <div ref={content} className="overflow-auto transition-all duration-300 ease-linear" style={{ maxHeight: `${setHeight}` }}>
            <div className="submenu pt-5 pb-0">{children}</div>
         </div>
      </ul>
   );
};

Accordion.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
};

export default Accordion;
