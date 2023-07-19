import type { ComponentStory, Meta } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
  tags: ['autodocs'],
  title: 'ui/button'
} as Meta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default: ComponentStory<typeof Button> = ButtonTemplate.bind({});
Default.args = { children: '123', loading: true };
