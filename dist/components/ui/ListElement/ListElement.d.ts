import { ReactNode } from 'react';
type ListElementProps<T> = {
    item: T;
    renderItem: (item: T) => ReactNode;
};
export declare const ListElement: <T>({ item, renderItem }: ListElementProps<T>) => JSX.Element;
export {};
