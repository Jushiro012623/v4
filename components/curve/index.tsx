"use client";
import React, {
  forwardRef,
  PropsWithChildren
} from "react";
import { SVG } from "./svg";
import { useCurve } from "./hooks";
const Curve = forwardRef<HTMLDivElement, PropsWithChildren>(() => {
  const { dimension } = useCurve();
  return (
    <div className="page curve z-[50]">
      <div
        className="bg-white background text-black-100"
        style={{ opacity: dimension.width > 0 ? 0 : 1 }}></div>
      {dimension.width > 0 && <SVG {...dimension} />}
      {/* {props.children} */}
    </div>
  );
});

Curve.displayName = "Curve";
export default Curve;
