import { Wrapper } from "@/components/Game/Wrapper";
import { Top } from "@/components/Top";
import React from "react";
import { GameArea } from "@/components/Game/GameArea";
import { ScoreBoard } from "@/components/ScoreBoard/ScoreBoard";
import { Grid } from "@/components/Grid/Grid";
import { CellState, emptyFieldGenerator } from "@/helpers/Field";

export const Game = () => {
  const levels = ["beginner", "intermediate", "expert"];
  const playerFields = emptyFieldGenerator(10, CellState.hidden);
  const onChangeLevel =
  const onReset = () => null;
  const onContextMenu = () => null;
  const onClick = () => null;
  return (
    <Wrapper>
      <Top feature="Flag" firstAction="ctrl" secondAction="click">
        Minesweeper
      </Top>
      <GameArea>
        <ScoreBoard time="000" levels={levels} onReset={onReset} mines="010" />
        <Grid onContextMenu={onContextMenu} onClick={onClick}>
          {playerFields}
        </Grid>
      </GameArea>
    </Wrapper>
  );
};
