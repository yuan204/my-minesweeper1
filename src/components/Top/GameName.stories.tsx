import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GameName } from "./GameName";

export default {
  title: "Top/GameName",
  component: GameName,
} as ComponentMeta<typeof GameName>;

const Template: ComponentStory<typeof GameName> = (args) => (
  <GameName {...args} />
);

export const GameNameStory = Template.bind({});
GameNameStory.args = {
  children: "Minesweeper",
};
