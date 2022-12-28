import { CellState } from "@/helpers/Field";
import { fireEvent, render } from "@testing-library/react";
import { Cell, CellProps } from "@/components/Grid/Cell";
import React from "react";
test("should prevent default contextMenu for every type cell", () => {
  for (let i = CellState.empty; i <= CellState.weakMark; i++) {
    const cellProps: CellProps = {
      coords: [1, 1],
      children: i,
      onClick: () => null,
      onContextMenu: () => null,
    };
    render(<Cell {...cellProps} />);
  }
});
