import { render } from "@testing-library/react";
import { GameName } from "@/components/Top/GameName";
import React from "react";
import { Legend } from "@/components/Top/Legend";
import { Top } from "@/components/Top/Top";

test("top should render correctly", () => {
  const props = {
    feature: "Flag",
    firstAction: "ctrl",
    secondAction: "click",
    children: "Minesweeper",
  };
  const { asFragment } = render(<Top {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
