import React, { ChangeEvent } from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

export const Input = ({ label, value, onChange }: InputProps) => {
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