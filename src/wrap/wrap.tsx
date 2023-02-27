import { useCallback, useState } from "react";
import Layer from "../layer/layer";
import "./wrap.css";

export const maxZoom = 3;
export const minZoom = 0.5;
export const zoomStep = 0.15;

export default function Wrap() {
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [isMove, setIsMove] = useState<boolean>(false);

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsMove(true);

    console.log(); // здесь вывести в консоль координаты клика относительно Layer
  }, []);

  const onMouseUp = useCallback(() => {
    setIsMove(false);
  }, []);

  const onDoubleClick = useCallback(() => {
    setOffsetX(0);
    setOffsetY(0);
    setScale(1);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isMove) {
        return;
      }
      setOffsetX((v) => v + e.movementX);
      setOffsetY((v) => v + e.movementY);
    },
    [isMove]
  );

  const onZoom = useCallback(
    (e: React.WheelEvent) => {
      const newScale = e.deltaY < 0 ? scale + zoomStep : scale - zoomStep;

      if (newScale > maxZoom || newScale < minZoom) {
        return;
      }
      setScale(newScale);
    },
    [scale]
  );

  return (
    <div
      className="wrap"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onWheel={onZoom}
      onDoubleClick={onDoubleClick}
    >
      <Layer offsetX={offsetX} offsetY={offsetY} scale={scale} />
    </div>
  );
}
