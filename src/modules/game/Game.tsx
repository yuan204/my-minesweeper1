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
import { gameSetting, LevelName, GameLevels } from "@/modules/game/gameSetting";
import { openCell } from "@/helpers/CellManipulator";

export const Game = () => {
  const [level, setLevel] = useState<LevelName>("beginner");
  const [size, bombs] = gameSetting[level as LevelName];
  const [playerFields, setPlayerFields] = useState(
    emptyFieldGenerator(size, CellState.hidden)
  );
  const [gameFields, setGameFields] = useState(
    fieldGenerator(size, bombs / (size * size))
  );
  const onChangeLevel = (event: ChangeEvent<HTMLSelectElement>) => {
    const level = event.target.value as LevelName;
    setLevel(level);
    const setting = gameSetting[level as LevelName];
    resetHandler(setting);
  };
  const resetHandler = ([size, bombs]: [number, number]) => {
    setPlayerFields(emptyFieldGenerator(size, CellState.hidden));
    setGameFields(fieldGenerator(size, bombs / (size * size)));
  };

  const onReset = () => resetHandler([size, bombs]);
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
          levels={GameLevels as unknown as string[]}
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
