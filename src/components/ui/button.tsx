import React from 'react';
import { Loader2, Check } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  success?: boolean;
}

export function Button({ children, variant = 'primary', loading = false, success = false, className = '', ...props }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white focus:ring-[var(--primary-500)]",
    secondary: "bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white focus:ring-[var(--secondary-500)]"
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {children}
        </span>
      ) : success ? (
        <span className="flex items-center justify-center">
          <Check className="mr-2 h-4 w-4" />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
