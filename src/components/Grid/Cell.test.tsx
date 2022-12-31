import { CellState, Coord } from "@/helpers/Field";
import { fireEvent, render, screen, createEvent } from "@testing-library/react";
import { Cell, CellProps, CloseFrame } from "@/components/Grid/Cell";
import React from "react";

describe("cell check", () => {
  const activeCells = [CellState.hidden, CellState.mark, CellState.weakMark];
  const coords: Coord = [1, 1];
  for (let i = CellState.empty; i <= CellState.weakMark; i++) {
    const onClick = jest.fn();
    const onContextMenu = jest.fn();
    const cellProps: CellProps = {
      coords,
      children: i,
      onClick: onClick,
      onContextMenu: onContextMenu,
    };
    test("cell should render correctly", () => {
      const { asFragment } = render(<Cell {...cellProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
    test("closeFramed should render correctly", () => {
      const { asFragment } = render(<CloseFrame mousedown={true} />);
      expect(asFragment()).toMatchSnapshot();
    });
    // it  unmount React tree after each test auto called cleanup
    test("should prevent default contextMenu for every type cell", () => {
      render(<Cell {...cellProps} />);
      const element = screen.getByTestId(`${i}-${coords}`);
      const contextMenuEvent = createEvent.contextMenu(element);
      fireEvent(element, contextMenuEvent);
      expect(contextMenuEvent.defaultPrevented).toBe(true);
    });
    test("onclick and onContextMenu should be called for active cells", () => {
      render(<Cell {...cellProps} />);
      const element = screen.getByTestId(`${i}-${coords}`);
      fireEvent.contextMenu(element);
      fireEvent.click(element);
      if (activeCells.includes(i)) {
        expect(onContextMenu).toBeCalled();
        expect(onClick).toBeCalled();
      } else {
        expect(onContextMenu).not.toBeCalled();
        expect(onClick).not.toBeCalled();
      }
    });
  }
});
