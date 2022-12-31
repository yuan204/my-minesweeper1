import { render } from "@testing-library/react";
import { GameName } from "@/components/Top/GameName";
import React from "react";
import { Legend } from "@/components/Top/Legend";

test("legend should render correctly", () => {
  const props = {
    feature: "Flag",
    firstAction: "ctrl",
    secondAction: "click",
  };
  const { asFragment } = render(<Legend {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
