import styled from "@emotion/styled";
import { Counter } from "@/components/ScoreBoard/Counter";
import { Level } from "@/components/ScoreBoard/Level";
import { Reset } from "@/components/ScoreBoard/Reset";
import React, { FC } from "react";
interface ScoreBoardProps {
  time: string;
  levels: string[];
  onReset: () => void;
  mines: string;
}
export const ScoreBoard: FC<ScoreBoardProps> = ({
  time,
  levels,
  mines,
  onReset,
}) => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <Level>{levels}</Level>
      <Reset onReset={onReset} />
      <Counter>{mines}</Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`;
