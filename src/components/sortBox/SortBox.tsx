import React from 'react';
import * as Styles from './SortBox.styled';

interface ISortBoxProps {
  handleSort: (sortType: string) => void;
}

const SortBox = ({ handleSort }: ISortBoxProps) => {
  const handleNameFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSort(e.target.value);
  };

  return (
    <Styles.SortBox>
      <select className="selectBox" onChange={handleNameFeature}>
        <option value={'default'}>Sort By</option>
        <option value={'A-Z'}>Alphabetically, A-Z</option>
        <option value={'Z-A'}>Alphabetically, Z-A</option>
        <option value={'low-high'}>Price, low to high</option>
        <option value={'high-low'}>Price, high to low</option>
      </select>
    </Styles.SortBox>
  );
};

export default SortBox;
