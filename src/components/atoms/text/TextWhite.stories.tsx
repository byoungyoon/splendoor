import type { Meta, StoryObj } from '@storybook/react';
import { TextWhite } from '@components/atoms';

const meta: Meta<typeof TextWhite> = {
  title: 'atoms/TextWhite',
  component: TextWhite,
};

export default meta;
type Story = StoryObj<typeof TextWhite>;

export const Preview: Story = {
  args: {
    text: 'test',
  },
};
