import { Magnetic } from "@/components/magnetic";
import React from "react";

const ContactButton = () => {
  return (
    <Magnetic>
      <button className="active:scale-95 bg-card p-[3px] rounded-full overflow-hidden  transition-transform text-white drop-shadow-[0_25px_25px_rgba(13, 148, 136,0)] ">
        <div className="px-5 py-3  flex items-center gap-2 bg-black-300 rounded-full">
          <span className="block w-3 h-3 bg-card rounded-full ">
            <span className="block w-3 h-3 bg-card rounded-full animate-ping"></span>
          </span>
        Let's work together
        </div>
      </button>
    </Magnetic>
  );
};

export default ContactButton;
