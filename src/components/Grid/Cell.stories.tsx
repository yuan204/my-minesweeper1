import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Cell } from "./Cell";

export default {
  title: "Top/Cell",
  component: Cell,
  argTypes: {
    coords: {
      defaultValue: [2, 2],
    },
  },
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const CellEmpty = Template.bind({});
CellEmpty.args = {
  children: 0,
};

export const CellHidden = Template.bind({});
CellHidden.args = {
  children: 10,
};

export const CellBomb = Template.bind({});
CellBomb.args = {
  children: 9,
};

export const CellWeakMark = Template.bind({});
CellWeakMark.args = {
  children: 12,
};

export const CellMark = Template.bind({});
CellMark.args = {
  children: 11,
};

export const CellWith1 = Template.bind({});
CellWith1.args = {
  children: 1,
};

export const CellWith2 = Template.bind({});
CellWith2.args = {
  children: 2,
};

export const CellWith3 = Template.bind({});
CellWith3.args = {
  children: 3,
};

export const CellWith8 = Template.bind({});
CellWith8.args = {
  children: 8,
};
