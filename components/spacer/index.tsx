import React from "react";

const Spacer = ({
  x = "full",
  y = "full",
}: {
  x?: number | string;
  y?: number | string;
}) => {
  return <span className={`block h-${y} w-${x} `} />;
};

export default Spacer;
