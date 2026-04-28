import type { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  required?: boolean;
}

const TextArea = ({ label, name, required, ...rest }: TextAreaProps) => {
  return (
    <label className="field">
      <span className="field-label">
        {label}
        {required && <span className="field-required">*</span>}
      </span>
      <textarea
        className="field-input field-textarea"
        id={name}
        name={name}
        required={required}
        {...rest}
      />
    </label>
  );
};

export default TextArea;