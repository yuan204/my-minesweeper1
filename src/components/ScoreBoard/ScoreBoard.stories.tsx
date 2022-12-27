import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ScoreBoard } from "./ScoreBoard";

export default {
  title: "ScoreBoard/ScoreBoard",
  component: ScoreBoard,
} as ComponentMeta<typeof ScoreBoard>;

const Template: ComponentStory<typeof ScoreBoard> = (args) => (
  <ScoreBoard {...args} />
);

export const ScoreBoardExample = Template.bind({});
ScoreBoardExample.args = {
  time: "000",
  levels: ["beginner", "intermediate", "expert"],
  mines: "010",
};
