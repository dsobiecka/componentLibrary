import React, { useState } from 'react';

type DropdownProps = {
    options: string[];
    onChange: (selectedOption: string) => void;
    className?: string;
    buttonClassName?: string;
    menuClassName?: string;
    itemClassName?: string;
};

export const Dropdown = ({
    options,
    onChange,
    className,
    buttonClassName,
    menuClassName,
    itemClassName,
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={className}>
            <button className={buttonClassName} onClick={handleToggle}>
                Select
            </button>
            {isOpen && (
                <ul className={menuClassName}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={itemClassName}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};