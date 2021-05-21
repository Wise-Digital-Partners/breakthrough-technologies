import React, { useRef } from "react";
import MicroModal from "micromodal";
import styled from "@emotion/styled";
import tw from "twin.macro";

import SliderGallery from "../Slider/SliderGallery";

const StyledModal = styled.div`
   .modal {
      &.is-open {
         ${tw`block`}
      }
      &[aria-hidden="false"] {
         .overlay {
            animation: mmfadeIn 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="false"] {
         .content-wrapper {
            animation: mmpopUp 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="true"] {
         .overlay {
            animation: mmfadeOut 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      &[aria-hidden="true"] {
         .content-wrapper {
            animation: mmpopOut 0.5s cubic-bezier(0, 0, 0.2, 1);
         }
      }
      .content-wrapper,
      .overlay {
         will-change: transform;
      }
      .close {
         ${tw`absolute top-0 right-0 left-auto transform translate-x-1/2	md:translate-x-0 mb-0 mr-8 md:mr-10 mt-4 md:mt-10 text-black hover:text-primary-400 text-2xl cursor-pointer transition-all duration-300 ease-linear z-10`}
         &:hover,
            &:focus,
            &:active {
            ${tw`text-primary-400`}
         }
      }
   }
   @keyframes mmfadeIn {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
   @keyframes mmfadeOut {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
      }
   }
   @keyframes mmpopUp {
      from {
         transform: scale(0);
      }
      to {
         transform: scale(1);
      }
   }
   @keyframes mmpopOut {
      from {
         transform: scale(1);
      }
      to {
         transform: scale(0);
      }
   }
`;

const Modal = ({ slideIndex, children }) => {
   if (typeof window !== `undefined`) {
      MicroModal.init({
         openTrigger: "data-modal-open",
         closeTrigger: "data-modal-close",
         disableFocus: true,
         disableScroll: true,
         awaitOpenAnimation: true,
         awaitCloseAnimation: true,
      });
   }

   const slider = useRef();

   return (
      <div>
         <StyledModal>
            <div className="modal relative hidden z-50" id="modal-gallery" aria-hidden="false">
               <div
                  className="overlay fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-black bg-opacity-75 outline-none"
                  tabIndex="-1"
                  data-modal-close
               >
                  <div className="content-wrapper bg-white w-full h-screen overflow-auto py-16" role="dialog" aria-modal="true">
                     <SliderGallery slideIndex={slideIndex} children={children} ref={slider} />
                     <i className="close fal fa-times" data-modal-close></i>
                  </div>
               </div>
               {/* <i className="close fal fa-times" data-modal-close></i> */}
               {/* <div className="md:hidden bg-primary-400 h-20 fixed bottom-0 w-full"></div>               */}
            </div>
         </StyledModal>
      </div>
   );
};

export default Modal;
