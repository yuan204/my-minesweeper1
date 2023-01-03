import styled from "@emotion/styled";
import { Counter } from "@/components/ScoreBoard/Counter";
import { Level } from "@/components/ScoreBoard/Level";
import { Reset } from "@/components/ScoreBoard/Reset";
import React, { ChangeEvent, FC } from "react";

interface ScoreBoardProps {
  time: string;
  levels: string[];
  onReset: () => void;
  onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
  level: string;
  mines: string;
}

export const ScoreBoard: FC<ScoreBoardProps> = ({
  time,
  levels,
  mines,
  onReset,
  level,
  onChangeLevel,
}) => {
  return (
    <Wrapper>
      <Counter>{time}</Counter>
      <div>
        <Level onChange={onChangeLevel} value={level}>
          {levels}
        </Level>
        <Reset onReset={onReset} />
      </div>
      <Counter>{mines}</Counter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2vw;
  justify-content: space-between;
`;
