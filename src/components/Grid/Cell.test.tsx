import { CellState } from "@/helpers/Field";
import { fireEvent, render, screen } from "@testing-library/react";
import { Cell, CellProps } from "@/components/Grid/Cell";
import React from "react";
test("should prevent default contextMenu for every type cell", () => {
  for (let i = CellState.empty; i <= CellState.weakMark; i++) {
    const onClick = jest.fn();
    const onContextMenu = jest.fn();
    const cellProps: CellProps = {
      coords: [1, 1],
      children: i,
      onClick: onClick,
      onContextMenu: onContextMenu,
    };
    render(<Cell {...cellProps} />);
    const element = screen.getByTestId(`1-1`);
    const contextMenuEvent = fireEvent.contextMenu(element);
    expect(contextMenuEvent.);
  }
});
