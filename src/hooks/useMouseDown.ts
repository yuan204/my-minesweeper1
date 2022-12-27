import { useState } from "react";

type OnMouseDown = () => void;
type OnMouseUp = () => void;
export const useMouseDown = (): [boolean, OnMouseDown, OnMouseUp] => {
  const [mousedown, setMousedown] = useState(false);
  const onMouseDown = (): void => setMousedown(true);
  const onMouseUp = (): void => setMousedown(false);
  return [mousedown, onMouseDown, onMouseUp];
};
