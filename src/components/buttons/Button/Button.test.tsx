import { fireEvent, render, screen } from '@testing-library/react';

import type { ButtonProps } from './Button';
import { Button, BUTTON_TEST_IDS } from './Button';

describe('Button', () => {
  const mockOnClick = jest.fn();
  const defaultProps: ButtonProps = {
    children: 'Test Button',
    onClick: mockOnClick
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should render base button logic', () => {
    render(<Button {...defaultProps} />);
    expect(screen.queryByTestId(BUTTON_TEST_IDS.START_ICON)).not.toBeInTheDocument();
    expect(screen.queryByTestId(BUTTON_TEST_IDS.END_ICON)).not.toBeInTheDocument();
  });
  test('should render button with children', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const children = getByTestId(BUTTON_TEST_IDS.CHILDREN);
    expect(children).toHaveTextContent('Test Button');
  });
  test('should call onClick handler when clicked', () => {
    const { getByTestId } = render(<Button {...defaultProps} />);
    const button = getByTestId(BUTTON_TEST_IDS.CONTAINER);
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(1);
    fireEvent.click(button);
    expect(mockOnClick).toBeCalledTimes(2);
  });
  test('should render start icon', () => {
    const { getByTestId } = render(
      <Button {...defaultProps} startIcon={<span>Start Icon</span>} />
    );
    const startIcon = getByTestId(BUTTON_TEST_IDS.START_ICON);
    expect(startIcon).toBeInTheDocument();
  });
  test('should render end icon', () => {
    const { getByTestId } = render(<Button {...defaultProps} endIcon={<span>End Icon</span>} />);
    const endIcon = getByTestId(BUTTON_TEST_IDS.END_ICON);
    expect(endIcon).toBeInTheDocument();
  });
  test('should render loading spinner when loading prop is true', () => {
    const { getByTestId } = render(<Button {...defaultProps} loading />);
    const loader = getByTestId(BUTTON_TEST_IDS.LOADER);
    expect(loader).toBeInTheDocument();
  });
  test('should have correct variant class when variant prop is "contained"', () => {
    const containedButtonClasses =
      'border-primary bg-primary text-white hover:bg-grey hover:border-grey';

    const { getByTestId } = render(<Button {...defaultProps} variant='contained' />);
    const button = getByTestId(BUTTON_TEST_IDS.CONTAINER);
    expect(button).toHaveClass(containedButtonClasses);
  });
  test('should have correct variant class when variant prop is "outlined"', () => {
    const outlinedButtonClasses = 'border-secondary text-black hover:border-primary';

    const { getByTestId } = render(<Button {...defaultProps} variant='outlined' />);
    const button = getByTestId(BUTTON_TEST_IDS.CONTAINER);
    expect(button).toHaveClass(outlinedButtonClasses);
  });
  test('should have correct size class when size prop is "medium"', () => {
    const mediumButtonClasses = 'min-h-[60px] py-[18px] px-[24px]';

    const { getByTestId } = render(<Button {...defaultProps} size='medium' />);
    const button = getByTestId(BUTTON_TEST_IDS.CONTAINER);
    expect(button).toHaveClass(mediumButtonClasses);
  });
  test('should have correct size class when size prop is "small"', () => {
    const smallButtonClasses = 'py-1.5 px-5';

    const { getByTestId } = render(<Button {...defaultProps} size='small' />);
    const button = getByTestId(BUTTON_TEST_IDS.CONTAINER);
    expect(button).toHaveClass(smallButtonClasses);
  });
});
