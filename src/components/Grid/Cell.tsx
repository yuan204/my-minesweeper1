import React, { FC, MouseEvent } from "react";
import styled from "@emotion/styled";
import { Cell as CellType, CellState, Coord } from "@/helpers/Field";
import { useMouseDown } from "@/hooks/useMouseDown";

export interface CellProps {
  coords: Coord;
  onContextMenu: (coords: Coord) => void;
  onClick: (coords: Coord) => void;
  children: CellType;
}

export const Cell: FC<CellProps> = (props) => {
  const activeCells = [CellState.hidden, CellState.mark, CellState.weakMark];
  const { coords, children } = props;
  const onContextMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (activeCells.includes(children)) {
      props.onContextMenu(coords);
    }
  };
  const onClick = (event: React.MouseEvent<HTMLDivElement>) =>
    props.onClick(props.coords);
  const cellProps = {
    "data-testid": `${children}-${coords}`,
    children,
    onContextMenu,
    onClick,
    role: "cell",
  };
  return <CellMap {...cellProps} />;
};

interface CellMapProps {
  onContextMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  "data-testid": string;
}

export const CellMap: FC<CellMapProps> = ({ children, ...rest }) => {
  const [mousedown, onMouseDown, onMouseUp] = useMouseDown();
  const notActiveProps = {
    onContextMenu: rest.onContextMenu,
    "data-testid": rest["data-testid"],
  };
  const activeProps = {
    ...rest,
    mousedown,
    onMouseDown,
    onMouseUp,
  };
  switch (children) {
    case CellState.hidden:
      return <CloseFrame {...activeProps} />;
    case CellState.empty:
      return <RevealFrame {...notActiveProps} />;
    case CellState.bomb:
      return (
        <BombFrame {...notActiveProps}>
          <Bomb />
        </BombFrame>
      );
    case CellState.mark:
      return (
        <CloseFrame {...activeProps}>
          <Flag />
        </CloseFrame>
      );
    case CellState.weakMark:
      return (
        <CloseFrame {...activeProps}>
          <WeakFlag />
        </CloseFrame>
      );
    default:
      return <RevealFrame {...notActiveProps}>{children}</RevealFrame>;
  }
};

interface CloseFrameProps {
  mousedown?: boolean;
}

export const CloseFrame = styled.div<CloseFrameProps>`
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
const transparent = "rgba(0,0,0,0)";

const colors: { [key in CellType]: string } = {
  0: "#000000",
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

  color: ${({ children }) => colors[children as CellType]};
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

const Flag = styled.div`
  width: 0px;
  height: 0px;
  border-top: 0.5vw solid transparent;
  border-bottom: 0.5vw solid transparent;
  border-left: 0.5vw solid #ec433c;
`;

const WeakFlag = styled(Flag)`
  border-left: 0.5vw solid #f19996;
`;
