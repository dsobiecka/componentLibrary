import React, { ChangeEvent } from 'react';

type SwitchProps = {
    id: string;
    name: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

const Switch = ({ id, name, checked, onChange, className }: SwitchProps) => {
    return (
        <div className={className}>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className="switch-input"
            />
            <label htmlFor={id} className="switch-label"></label>
        </div>
    );
};

export default Switch;
