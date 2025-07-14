"use client";

import { useRef } from "react";
import Card from "./cards";
import { projects } from "./data";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const container = useRef(null);

  return (
    <main
      ref={container}
      className={`max-w-7xl mx-auto relative mt-[5vh]`}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card key={`p_${i}`} {...project} i={i} targetScale={targetScale} />
        );
      })}
    </main>
  );
}
