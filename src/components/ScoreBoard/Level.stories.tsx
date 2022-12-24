import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Level } from "./Level";

export default {
  title: "ScoreBoard/Level",
  component: Level,
} as ComponentMeta<typeof Level>;

const Template: ComponentStory<typeof Level> = (args) => <Level {...args} />;

export const LevelExample = Template.bind({});
LevelExample.args = {
  children: ["aa", "bb", "cc"],
};
