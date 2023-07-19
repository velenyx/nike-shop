import { render, screen } from '@testing-library/react';

import { Typography, TYPOGRAPHY_TEST_IDS } from './Typography';

describe('Typography', () => {
  it('renders the correct variant and children', () => {
    render(<Typography variant='title-1'>Hello World</Typography>);
    const typographyContainer = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(typographyContainer).toHaveClass('font-nike font-extrabold text-7xl');
    expect(typographyContainer).toHaveTextContent('Hello World');
  });
  it('renders the correct tag', () => {
    render(
      <Typography tag='h1' variant='title-1'>
        Hello World
      </Typography>
    );
    const typographyContainer = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(typographyContainer.tagName.toLowerCase()).toBe('h1');
  });
  it('renders a div tag by default', () => {
    render(<Typography variant='title-1'>Hello World</Typography>);
    const typographyContainer = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);
    expect(typographyContainer.tagName.toLowerCase()).toBe('div');
  });
});
