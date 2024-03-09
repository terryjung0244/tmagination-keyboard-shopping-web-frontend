import React from 'react';

interface ISortBoxProps {
  handleSort: (sortType: string) => void;
}

const SortBox = ({ handleSort }: ISortBoxProps) => {
  return (
    <div>
      <h3>Sorting Box</h3>
      <button onClick={() => handleSort('name')}>Name</button>
      <button onClick={() => handleSort('price')}>Price</button>
    </div>
  );
};

export default SortBox;
