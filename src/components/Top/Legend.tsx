import styled from "@emotion/styled";
import React, { FC } from "react";

export interface LegendProps {
  feature: string;
  firstAction: string;
  secondAction: string;
}

export const Legend: FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => {
  return (
    <LegendContainer>
      <strong>{feature}: </strong>
      <Action>
        <FirstAction>{firstAction}</FirstAction>+
        <SecondAction>{secondAction}</SecondAction>
      </Action>
    </LegendContainer>
  );
};

const LegendContainer = styled.strong`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const Action = styled.code`
  background: #e3e3e3;
`;

const FirstAction = styled.code`
  color: #ec433c;
`;

const SecondAction = styled.code`
  color: #2a48ec;
`;
