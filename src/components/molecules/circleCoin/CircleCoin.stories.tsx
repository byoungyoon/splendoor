import { Meta, StoryObj } from '@storybook/react';
import { CircleCoin } from '@components/molecules';

const meta: Meta<typeof CircleCoin> = {
  title: 'molecules/CircleCoin',
  component: CircleCoin,
};

export default meta;
type Story = StoryObj<typeof CircleCoin>;

export const Preview: Story = {
  args: {},
};
