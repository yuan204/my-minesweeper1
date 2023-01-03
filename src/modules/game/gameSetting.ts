export const GameLevels = ["beginner", "intermediate", "expert"] as const;
export type LevelName = typeof GameLevels[number];
type Size = number;
type Bomb = number;
export type Setting = [Size, Bomb];
export const gameSetting: Record<LevelName, Setting> = {
  beginner: [9, 10],
  intermediate: [16, 44],
  expert: [22, 99],
};
