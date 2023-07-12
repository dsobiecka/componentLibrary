type DropdownProps = {
    options: string[];
    onChange: (selectedOption: string) => void;
    className?: string;
    buttonClassName?: string;
    menuClassName?: string;
    itemClassName?: string;
};
export declare const Dropdown: ({ options, onChange, className, buttonClassName, menuClassName, itemClassName, }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export {};
