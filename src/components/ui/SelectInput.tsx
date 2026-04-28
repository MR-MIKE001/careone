import type { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
}

const SelectInput = ({
  label,
  name,
  required,
  children,
  ...rest
}: SelectInputProps) => {
  return (
    <label className="field">
      <span className="field-label">
        {label}
        {required && <span className="field-required">*</span>}
      </span>
      <select
        className="field-input"
        id={name}
        name={name}
        required={required}
        {...rest}
      >
        {children}
      </select>
    </label>
  );
};

export default SelectInput;