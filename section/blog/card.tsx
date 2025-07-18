import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
// {setModal, index, title, desc, postedOn, img}
const Card = ({setModal, index, title, desc, postedOn, img}: any) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={`${styles.project} flex flex-col md:flex-row w-full h-full items-center gap-x-10 gap-y-5 px-4 py-10 border-none md:border-b transition-all cursor-pointer`}>
      <div className="relative h-40 md:h-auto md:aspect-[15/10] w-full md:max-w-56 md:min-w-56 rounded-lg overflow-hidden image-container">
        <div className={`w-full h-full`}>
          <Image
            fill
            src={ img}
            alt="image"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm text-gray-600">{desc}</p>
        <p className="text-xs text-gray-500">{postedOn}</p>
      </div>
    </div>
  );
};
{
}
export default Card;
