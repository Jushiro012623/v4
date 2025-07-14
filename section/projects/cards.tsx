"use client";

import Image from "next/image";
import useCardScale from "./hooks";
import { anton } from "@/lib/fonts";
import { BentoTilt } from "@/components/bento";

const Card = ({ title, description, src, url, i, color, targetScale }: any) => {
  const { imageRef, cardRef, container } = useCardScale(targetScale);
  return (
    <div
      ref={container}
      className={`h-screen flex items-start justify-center sticky top-44`}>
      <div
        ref={cardRef}
        className={`flex flex-col relative h-[400px] md:h-[500px] w-[1000px] p-[50px] origin-top border border-white/10 rounded-3xl overflow-hidden ${color}`}
        style={{
          top: `calc(-5vh + ${i * 40}px)`,
        }}>
        <div className={`flex h-full md:mt-[50px] gap-[50px] flex-col md:flex-row`}>
          <div className={`md:h-full w-full md:w-[40%] relative text-white`}>
            <h2 className={`m-0 text-4xl text-center md:text-left tracking-wide ${anton.className}`}>{title}</h2>
            <span className={`block h-0 md:h-5 w-full `} />
            <p className="text-base first-letter:text-3xl tracking-wide hidden md:block">{description}</p>
            <a href={url} target="_blank" className=" hidden md:block absolute bottom-0 left-0 transition-colors hover:bg-white/10 border border-white/10 rounded-full py-3 px-6">
                {url == "#" ? "See More" : "Live Preview"}
            </a>
          </div>

          <BentoTilt
            className={`relative w-full flex-grow md:w-[60%] h-full rounded-3xl overflow-hidden shadow-lg ${color} border border-white/20`}>
            <div className={`w-full h-full`} ref={imageRef}>
              <Image
                fill
                src={`/img/${src}`}
                alt="image"
                className="object-cover"
              />
            </div>
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Card;
