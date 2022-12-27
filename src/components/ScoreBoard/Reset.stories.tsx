import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Reset } from "./Reset";

export default {
  title: "ScoreBoard/Reset",
  component: Reset,
} as ComponentMeta<typeof Reset>;

const Template: ComponentStory<typeof Reset> = (args) => <Reset {...args} />;

export const ResetExample = Template.bind({});
ResetExample.args = {
  onReset: () => null,
};
