import React from "react";

type SpacerProps = {
  height?: number | string;
  width?: number | string;
};

export const Spacer: React.FunctionComponent<SpacerProps> = ({
  height,
  width,
}) => {
  return <div style={{ height, width }}></div>;
};
