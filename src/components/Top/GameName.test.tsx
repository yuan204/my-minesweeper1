import { render } from "@testing-library/react";
import { GameName } from "@/components/Top/GameName";
import React from "react";

test("gamename should render correctly", () => {
  const { asFragment } = render(<GameName>Minesweepe88r</GameName>);
  expect(asFragment()).toMatchSnapshot();
});
