import Spacer from "@/components/spacer";
import React, { forwardRef } from "react";
import ContactButton from "./contact-button";
import TextArea from "./text-area";
import MyImage from "./my-image";
const HeroSection = forwardRef(() => {
  return (
    <section className="w-full h-screen md:h-[90vh] flex flex-col justify-start items-center">
      <div className="flex flex-col items-center translate-y-24 md:translate-y-1/3 w-full">
        <span className={`block h-9 w-full `} />
        <MyImage />
        <TextArea />
        <span className={`block h-9 w-full `} />
        <ContactButton />
        <span className={`block h-20 w-full `} />
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
