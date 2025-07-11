"use client";

import Image from "next/image";
import useCardScale from "./hooks";
import { anton } from "@/lib/fonts";
import Spacer from "@/components/spacer";

const Card = ({ title, description, src, url, i, img, targetScale }: any) => {
  const { imageRef, cardRef, container } = useCardScale(targetScale);
  return (
    <div
      ref={container}
      className={`h-screen flex items-start justify-center sticky top-44`}>
      <div
        ref={cardRef}
        className={`bg-card flex flex-col relative h-[500px] w-[1000px] p-[50px] origin-top border-2 border-white/70 ins rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 `}
        style={{
          top: `calc(-5vh + ${i * 40}px)`,
        }}>
        <div className={`flex h-full mt-[50px] gap-[50px] `}>
          <div className={`w-[40%] relative top-[10%] text-white`}>
            <h2 className={`text-left m-0 text-3xl ${anton.className}`}>{title}</h2>
            <Spacer y={10}/>
            <p className="text-base first-letter:text-3xl">{description}</p>
            {url !== "#" && (
              <span className="flex items-center gap-1">
                <a
                  className="text-[11px] cursor-pointer"
                  href={url}
                  target="_blank">
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            )}
          </div>

          <div
            className={`relative w-[60%] h-full rounded-3xl overflow-hidden shadow-lg shadow-neutral-800 backdrop-blur-3xl bg-white/20`}>
            <div className={`w-full h-full`} ref={imageRef}>
              <Image
                fill
                src={`/img/${src}`}
                alt="image"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
