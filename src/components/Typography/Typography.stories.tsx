import { Meta, StoryFn } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';

const typographiesProps: TypographyProps[] = [
  {
    children: 'Same Title',
    variant: 'title-1'
  },
  {
    children: 'Same Title2',
    variant: 'title-1'
  }
];

const TypographyTemplate: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

const typographyProps: TypographyProps = {
  children: 'typography',
  tag: 'div',
  variant: 'title-1'
};
export const Playground: StoryFn<typeof Typography> = TypographyTemplate.bind({});
Playground.args = typographyProps;

export const AllTypographies = () => (
  <>
    {typographiesProps.map((typographyProps) => (
      <Typography key={typographyProps.variant} {...typographyProps} />
    ))}
  </>
);

export default {
  component: Typography,
  title: 'ui/typography'
} as Meta<typeof Typography>;
