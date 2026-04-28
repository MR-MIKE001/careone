import type { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
}

const TextInput = ({ label, name, required, ...rest }: TextInputProps) => {
  return (
    <label className="field">
      <span className="field-label">
        {label}
        {required && <span className="field-required">*</span>}
      </span>
      <input
        className="field-input"
        id={name}
        name={name}
        required={required}
        {...rest}
      />
    </label>
  );
};

export default TextInput;