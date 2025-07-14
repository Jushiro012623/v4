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
        className={`flex flex-col relative h-[500px] w-[1000px] p-[50px] origin-top border border-white/10 rounded-3xl overflow-hidden ${color}`}
        style={{
          top: `calc(-5vh + ${i * 40}px)`,
        }}>
        <div className={`flex h-full mt-[50px] gap-[50px] `}>
          <div className={`h-full w-[40%] relative text-white`}>
            <h2 className={`text-left m-0 text-4xl tracking-wide ${anton.className}`}>{title}</h2>
            <span className={`block h-5 w-full `} />
            <p className="text-base first-letter:text-3xl tracking-wide">{description}</p>
            <a href={url} target="_blank" className="absolute bottom-0 left-0 transition-colors hover:bg-white/10 border border-white/10 rounded-full py-3 px-6">
                {url == "#" ? "See More" : "Live Preview"}
            </a>
          </div>

          <BentoTilt
            className={`relative w-[60%] h-full rounded-3xl overflow-hidden shadow-lg ${color} border border-white/20`}>
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
