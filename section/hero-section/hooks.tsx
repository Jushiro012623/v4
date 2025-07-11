import { useEffect, useRef, useState } from "react";
import { techStack } from "../../components/icon-stack/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ICON_SIZE = 80;
const AREA_WIDTH = 600;
const AREA_HEIGHT = 500;
const MIN_SPACING = 20;

const generateNonOverlappingPositions = (
  count: number,
  width: number,
  height: number,
  minSpacing: number
) => {
  const positions: { top: number; left: number }[] = [];
  let tries = 0;

  while (positions.length < count && tries < 1000) {
    const top = Math.random() * (height - ICON_SIZE);
    const left = Math.random() * (width - ICON_SIZE);
    const isTooClose = positions.some(
      (pos) => Math.hypot(pos.top - top, pos.left - left) < minSpacing
    );
    if (!isTooClose) {
      positions.push({ top, left });
    }
    tries++;
  }

  return positions;
};
const useTechStackFloting = () => {
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    const pos = generateNonOverlappingPositions(
      techStack.length,
      AREA_WIDTH,
      AREA_HEIGHT,
      MIN_SPACING
    );
    setPositions(pos);
  }, []);

  useGSAP(() => {
    iconRefs.current.forEach((el) => {
      if (!el) return;

      gsap.to(el, {
        y: () => gsap.utils.random(-15, 100),
        x: () => gsap.utils.random(-15, 100),
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, [positions]);

  return {positions, iconRefs}
};
export { useTechStackFloting };