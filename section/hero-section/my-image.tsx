import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { Fragment, useRef } from "react";
import { FaConnectdevelop } from "react-icons/fa";

const MyImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: () => gsap.utils.random(-10, 20),
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <Fragment>
      <div className="relative w-28 aspect-square">
        <Image
          fill
          src={`/assets/me.jpg`}
          alt="me"
          className="object-cover rounded-full"
        />
      </div>
      <div className="bg-white flex items-center justify-center gap-2 rounded-md w-36 py-2 -translate-y-1/2 ">
        <FaConnectdevelop size={20} />
        <p className="text-sm font-semibold">iDevX.infinity</p>
      </div>
    </Fragment>
  );
};

export default MyImage;
