import { Meta, StoryObj } from '@storybook/react';
import { CardUi } from '@components/ui/card/CardUi';

const initialState = {
  thumbnail: {
    src: '',
    alt: '',
    width: 120,
    height: 120,
  },
};

const meta: Meta<typeof CardUi> = {
  title: 'components/ui/CardUi',
  argTypes: {
    thumbnail: {
      description: 'Thumbnail Image Info',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardUi>;

export const CardUiComponent: Story = {
  args: {
    thumbnail: initialState.thumbnail,
  },
};
