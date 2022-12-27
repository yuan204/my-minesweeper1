import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

import { Reset } from "./Reset";

test("load and display 🙂", async () => {
  render(<Reset onReset={() => null} />);
  expect(screen.getByText("🙂")).toBeInTheDocument();
});

test("onReset handler should be called", () => {
  const onReset = jest.fn();
  render(<Reset onReset={onReset} />);
  fireEvent.click(screen.getByText("🙂"));
  expect(onReset).toBeCalled();
});
test("should change state when onmousedown and onMouseUp event happen", async () => {
  render(<Reset onReset={() => null} />);
  fireEvent.mouseDown(screen.getByText("🙂"));
  expect(screen.getByText("😯")).toBeInTheDocument();
  fireEvent.mouseUp(screen.getByText("😯"));
  expect(screen.getByText("🙂")).toBeInTheDocument();
});

test("should change state when mousedown and mouseleave events happened", async () => {
  render(<Reset onReset={() => null} />);
  fireEvent.mouseDown(screen.getByText("🙂"));
  expect(screen.getByText("😯")).toBeInTheDocument();
  fireEvent.mouseLeave(screen.getByText("😯"));
  expect(screen.getByText("🙂")).toBeInTheDocument();
});
