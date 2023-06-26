import React from 'react';

type ListElementProps<T> = {
  item: T;
  renderItem: (item: T) => React.ReactNode;
};

function ListElement<T>({ item, renderItem }: ListElementProps<T>) {
  return <li>{renderItem(item)}</li>;
}

export default ListElement;
