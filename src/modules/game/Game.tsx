import { Wrapper } from "@/components/Game/Wrapper";
import { Top } from "@/components/Top";
import React, { ChangeEvent, useMemo, useState } from "react";
import { GameArea } from "@/components/Game/GameArea";
import { ScoreBoard } from "@/components/ScoreBoard/ScoreBoard";
import { Grid } from "@/components/Grid/Grid";
import {
  CellState,
  Coord,
  emptyFieldGenerator,
  fieldGenerator,
} from "@/helpers/Field";
import { gameSetting, LevelName } from "@/modules/game/gameSetting";
import { openCell } from "@/helpers/CellManipulator";

export const Game = () => {
  const levels = ["beginner", "intermediate", "expert"];
  const [level, setLevel] = useState<LevelName>("beginner");
  let [size, bombs] = gameSetting[level as LevelName];
  const [playerFields, setPlayerFields] = useState(
    emptyFieldGenerator(size, CellState.hidden)
  );
  const [gameFields, setGameFields] = useState(
    fieldGenerator(size, bombs / (size * size))
  );
  const onChangeLevel = (event: ChangeEvent<HTMLSelectElement>) => {
    const level = event.target.value as LevelName;
    setLevel(level);
    [size, bombs] = gameSetting[level as LevelName];
    onReset();
  };
  const onReset = () => {
    setPlayerFields(emptyFieldGenerator(size, CellState.hidden));
    setGameFields(fieldGenerator(size, bombs / (size * size)));
  };
  const onContextMenu = () => null;
  const onClick = (coords: Coord) => {
    const newPlayerFields = openCell(coords, playerFields, gameFields);
    setPlayerFields([...newPlayerFields]);
  };
  return (
    <Wrapper>
      <Top feature="Flag" firstAction="ctrl" secondAction="click">
        Minesweeper
      </Top>
      <GameArea>
        <ScoreBoard
          time="000"
          levels={levels}
          onReset={onReset}
          mines="010"
          level={level}
          onChangeLevel={onChangeLevel}
        />
        <Grid onContextMenu={onContextMenu} onClick={onClick}>
          {playerFields}
        </Grid>
      </GameArea>
    </Wrapper>
  );
};
