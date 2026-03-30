import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className="block text-sm font-medium text-[var(--text-main)] mb-2"
    >
      {children}
    </label>
  );
}
