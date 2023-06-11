import React from 'react';

type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
};

const Button: React.FC<ButtonProps> = ({onClick, disabled, label}) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
