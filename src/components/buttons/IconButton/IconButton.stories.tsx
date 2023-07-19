import { Meta, StoryFn } from '@storybook/react';

import * as Icons from '@/ui/icons';

import { IconButton, IconButtonProps } from './IconButton';

const iconButtonProps: IconButtonProps = {
  icon: <Icons.LikeIcon />
};

const iconButtonTemplate: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Playground: StoryFn<typeof IconButton> = iconButtonTemplate.bind({});
Playground.args = iconButtonProps;

export default {
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: Icons
    }
  },
  component: IconButton,
  title: 'ui/buttons/IconButton'
} as Meta<typeof IconButton>;
