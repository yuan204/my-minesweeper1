import { act, renderHook } from "@testing-library/react";
import { useMouseDown } from "@/hooks/useMouseDown";

test("shoule toggle state when onMouseDown and on", () => {
  const { result } = renderHook(useMouseDown);
  const [mousedown, onMouseDown, onMouseUp] = result.current;
  expect(mousedown).toBe(false);
  act(onMouseDown);
  expect(result.current[0]).toBe(true);
  act(onMouseUp);
  expect(result.current[0]).toBe(false);
});
