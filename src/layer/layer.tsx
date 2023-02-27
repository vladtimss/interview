import React, { useMemo } from "react";
import "./layer.css";

type LayerProps = {
  offsetX: number;
  offsetY: number;
  scale: number;
};

export default function Layer(props: LayerProps) {
  const getLayerStyles: React.CSSProperties = useMemo(
    () => ({
      transform: `translate(${props.offsetX}px, ${props.offsetY}px) scale(${props.scale})`
    }),
    [props.offsetX, props.offsetY, props.scale]
  );

  return (
    <div className="layer" style={getLayerStyles}>
      <div className="block" />
    </div>
  );
}
