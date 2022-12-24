import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Top } from "./Top";

export default {
  title: "Top/Top",
  component: Top,
} as ComponentMeta<typeof Top>;

const Template: ComponentStory<typeof Top> = (args) => <Top {...args} />;

export const TopPanel = Template.bind({});
TopPanel.args = {
  feature: "Flag",
  firstAction: "ctrl",
  secondAction: "click",
  children: "Minesweeper",
};
