import Spacer from "@/components/spacer";
import React from "react";

const TextArea = () => {
  return (
    <div className="max-w-2xl">
      <p className="text-5xl text-center font-semibold text-transparent bg-clip-text white-gradient">
        Software Developer
      </p>
      <span className={`block h-10 w-full `} />
      <p className="text-xl text-transparent text-white-600 text-center w-[28rem] mx-auto">
        I specialize in building scalable, maintainable web applications using
        modern frontend and backend technologies
      </p>
    </div>
  );
};

export default TextArea;
