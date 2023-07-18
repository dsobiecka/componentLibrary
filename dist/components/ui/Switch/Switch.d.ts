import { ChangeEvent } from 'react';
type SwitchProps = {
    id: string;
    name: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};
export declare const Switch: ({ id, name, checked, onChange, className }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export {};
