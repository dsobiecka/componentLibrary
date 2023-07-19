import React, { ReactNode } from 'react';

type ListElementProps<T> = {
  item: T;
  renderItem: (item: T) => ReactNode;
  className?: string;
};

export const ListElement = <T,>({ item, renderItem }: ListElementProps<T>): JSX.Element => {
  return <li>{renderItem(item)}</li>;
};