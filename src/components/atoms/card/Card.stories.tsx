import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@components/atoms';

const meta: Meta<typeof Card> = {
  title: 'atoms/Card',
  component: Card,
  parameters: {
    controls: {
      exclude: 'children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Preview: Story = {
  args: {
    children: 'test',
  },
};
