import { cva } from 'class-variance-authority';
import React, { memo } from 'react';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps extends ReactTagProps<'button'> {
  /**
   * Button Label
   * */
  children: React.ReactNode;
  /**
   * Loading
   * */
  loading?: boolean;
  /**
   * Иконка перед текстом
   * */
  startIcon?: React.ReactNode;
  /**
   * Иконка после текста
   * */
  endIcon?: React.ReactNode;
  /**
   * Вариации кнопки
   * */
  variant?: ButtonVariant;
  /**
   * Размеры кнопки
   * */
  size?: ButtonSize;
}

export const BUTTON_TEST_IDS = {
  CONTAINER: 'button-container',
  CHILDREN: 'button-children',
  LOADER: 'button-loader',
  START_ICON: 'button-startIcon',
  END_ICON: 'button-endIcon'
};

const classNames = cva(
  'w-full justify-center rounded-full border-[1.5px] align-middle text-[16px]',
  {
    variants: {
      size: {
        medium: 'min-h-[60px] py-[18px] px-[24px]',
        small: 'py-1.5 px-5'
      },
      variant: {
        contained: 'border-primary bg-primary text-white hover:bg-grey hover:border-grey',
        outlined: 'border-secondary hover:border-primary text-black'
      }
    }
  }
);

/**
 * Button component
 */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const Button: React.FC<ButtonProps> = memo(
  ({ children, loading, startIcon, endIcon, variant = 'contained', size = 'medium', ...props }) => {
    return (
      <button
        {...props}
        className={classNames({ size, variant })}
        data-testid={BUTTON_TEST_IDS.CONTAINER}
      >
        {startIcon && <span data-testid={BUTTON_TEST_IDS.START_ICON}>{startIcon}</span>}
        <span data-testid={BUTTON_TEST_IDS.CHILDREN}>{children}</span>
        {endIcon && <span data-testid={BUTTON_TEST_IDS.END_ICON}>{endIcon}</span>}

        {loading && <span data-testid={BUTTON_TEST_IDS.LOADER}>loading...</span>}
      </button>
    );
  }
);
