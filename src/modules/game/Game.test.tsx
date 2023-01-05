import { render, screen } from "@testing-library/react";
import { Game } from "@/modules/game/Game";
import React from "react";
import { userEvent } from "@storybook/testing-library";
test("game should render correctly", () => {
  const { asFragment } = render(<Game />);
  expect(asFragment()).toMatchSnapshot();
});

test("change game level", () => {
  render(<Game />);
  expect(screen.getAllByRole("cell")).toHaveLength(81);
  userEvent.selectOptions(screen.getByRole("listbox"), "intermediate");
  expect(screen.getAllByRole("cell")).toHaveLength(256);
  userEvent.selectOptions(screen.getByRole("listbox"), "expert");
  expect(screen.getAllByRole("cell")).toHaveLength(484);
});
