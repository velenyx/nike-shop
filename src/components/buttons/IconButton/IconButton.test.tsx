import { fireEvent, render } from '@testing-library/react';

import * as Icon from '@/ui/icons';

import { IconButton, ICONBUTTON_TEST_IDS, IconButtonProps } from './IconButton';

describe('IconButton', () => {
  const mockOnClick = jest.fn();
  const defaultProps: IconButtonProps = {
    icon: <Icon.LikeIcon />,
    onClick: mockOnClick
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the icon button correctly', () => {
    const { getByTestId } = render(<IconButton {...defaultProps} />);
    const container = getByTestId(ICONBUTTON_TEST_IDS.CONTAINER);
    const icon = getByTestId(ICONBUTTON_TEST_IDS.ICON);
    expect(container).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
  test('calls the onClick handler when clicked', () => {
    const { getByTestId } = render(<IconButton {...defaultProps} />);
    const container = getByTestId(ICONBUTTON_TEST_IDS.CONTAINER);
    fireEvent.click(container);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
