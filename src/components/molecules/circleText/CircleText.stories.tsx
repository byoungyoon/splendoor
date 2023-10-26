import { Meta, StoryObj } from '@storybook/react';
import { CircleText } from '@components/molecules';

const meta: Meta<typeof CircleText> = {
  title: 'molecules/CircleText',
  component: CircleText,
};

export default meta;
type Story = StoryObj<typeof CircleText>;

export const Preview: Story = {
  args: {
    size: 'md',
    text: '10',
  },
};
