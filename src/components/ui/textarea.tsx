import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, ...props }: TextareaProps) {
  return (
    <>
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-[var(--text-main)] mb-2">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className="w-full px-4 py-2 border border-[var(--border-color)] rounded-lg bg-[var(--bg-card)] text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:border-transparent resize-none"
      />
    </>
  );
}
