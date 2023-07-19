import React from 'react';

type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    className?: string;
};

export const Button = ({ onClick, disabled, label }: ButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};