// src/components/ui/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

const Button = ({ variant = 'primary', children, ...rest }: ButtonProps) => {
  return (
    <button
      className={`btn ${
        variant === 'primary'
          ? 'btn-primary'
          : variant === 'secondary'
          ? 'btn-secondary'
          : 'btn-ghost'
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;