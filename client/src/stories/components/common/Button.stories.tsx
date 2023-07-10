import { Button } from '@components/common/button/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'components/common/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    variant: 'primary',
  },
};
export const GrayButton: Story = {
  args: {
    variant: 'gray',
  },
};
export const IconButton: Story = {
  args: {
    variant: 'icon',
    icon: <span>ICON</span>,
  },
};
