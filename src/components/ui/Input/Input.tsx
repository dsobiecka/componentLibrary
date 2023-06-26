import React, { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default Input;
