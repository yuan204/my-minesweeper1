import { Legend, LegendProps } from "./Legend";
import { GameName, GameNameProps } from "./GameName";
import styled from "@emotion/styled";
import React, { FC } from "react";

type TopProps = LegendProps & GameNameProps;
export const Top: FC<TopProps> = ({ children, ...legendProps }) => {
  return (
    <Header>
      <GameName>{children}</GameName>
      <Legend {...legendProps} />
    </Header>
  );
};

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;
