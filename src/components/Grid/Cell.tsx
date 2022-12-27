import React, { FC, MouseEvent } from "react";
import styled from "@emotion/styled";
import { Cell, CellState, Coord } from "@/helpers/Field";

interface CellProps {
  coords: Coord;
  onContextMenu: (event: MouseEvent<HTMLElement>) => void;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  children: Cell;
}
export const Cell: FC<CellProps> = ({ children, ...rest }) => {
  switch (children) {
    case CellState.hidden:
      return <CloseFrame {...rest} />;
    case CellState.empty:
      return <RevealFrame />;
    case CellState.bomb:
      return (
        <BombFrame>
          <Bomb />
        </BombFrame>
      );
      case
  }
};

interface CloseFrameProps {
  mousedown?: boolean;
}

const CloseFrame = styled.div<CloseFrameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: ${(props) =>
    props.mousedown ? "transparent" : "white #9e9e9e #9e9e9e white"};

  &:hover {
    filter: brightness(1.1);
  }
`;
const colors: { [key in Cell]: string } = {
  0: "#000",
  1: "#2a48ec",
  2: "#2bb13d",
  3: "#ec6561",
  4: "#233db7",
  5: "#a6070f",
  6: "#e400af",
  7: "#906a02",
  8: "#fa0707",
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};
const RevealFrame = styled(CloseFrame)`
  border-color: #dddddd;
  cursor: default;
  &:hover {
    filter: brightness(1);
  }
  color: ${({ children }) => colors[children as Cell]};
`;

const BombFrame = styled(RevealFrame)`
  background: red;
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 1vw;
  height: 1vw;
  background-color: #333;
`;
