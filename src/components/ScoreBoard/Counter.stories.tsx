import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Counter } from "./Counter";

export default {
  title: "ScoreBoard/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const CounterExample = Template.bind({});
CounterExample.args = {
  children: "010",
};
