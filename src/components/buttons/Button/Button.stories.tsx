import type { Meta, StoryFn } from '@storybook/react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const buttonProps: ButtonProps = {
  children: 'Button',
  loading: true,
  size: 'medium',
  variant: 'contained'
};

export default {
  component: Button,
  tags: ['autodocs'],
  title: 'ui/button'
} as Meta<typeof Button>;

const ButtonTemplate: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Playground: StoryFn<typeof Button> = ButtonTemplate.bind({});
Playground.args = buttonProps;

export const Contained: StoryFn<typeof Button> = ButtonTemplate.bind({});
Contained.args = { ...buttonProps, variant: 'contained' };

export const Outlined: StoryFn<typeof Button> = ButtonTemplate.bind({});
Outlined.args = { ...buttonProps, variant: 'outlined' };
