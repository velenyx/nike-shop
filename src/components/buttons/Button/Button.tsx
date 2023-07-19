import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

export type ButtonVariant = 'contained' | 'outlined';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  variant: ButtonVariant;
}

export const BUTTON_TEST_IDS = {
  CONTAINER: 'button-container',
  LABEL: 'button-label',
  LOADER: 'button-loader'
};

/**
 * Button component
 */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const Button: React.FC<ButtonProps> = ({ children, loading, variant = 'contained' }) => {
  return (
    <button
      className='w-full rounded-full border-primary px-6'
      data-testid={BUTTON_TEST_IDS.CONTAINER}
    >
      <span data-testid={BUTTON_TEST_IDS.LABEL}>{children}</span>
      {loading && <span data-testid={BUTTON_TEST_IDS.LOADER}>loading...</span>}
    </button>
  );
};
