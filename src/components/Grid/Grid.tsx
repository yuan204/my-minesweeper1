import React, { FC } from "react";
import { Coord, Field } from "@/helpers/Field";
import { Cell } from "@/components/Grid/Cell";
import styled from "@emotion/styled";

export interface GridProps {
  children: Field;
  onContextMenu: (coords: Coord) => void;
  onClick: (coords: Coord) => void;
}
export const Grid: FC<GridProps> = ({ children, ...rest }) => (
  <Wrapper size={children.length}>
    {children.map((row, y) =>
      row.map((item, x) => {
        const coords: Coord = [y, x];
        const cellProps = {
          children: item,
          coords,
          ...rest,
        };
        return <Cell {...cellProps} key={`${y}-${x}`} />;
      })
    )}
  </Wrapper>
);
interface WrapperProps {
  size: number;
}
const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 1vw;
`;
