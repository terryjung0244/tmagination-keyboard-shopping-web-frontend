/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import * as Styles from './SortBox.styled';
import downArrow from '../../assets/downArrow.png';

interface ISortBoxProps {
  handleSort: (sortType: string) => void;
}

const SortBox = ({ handleSort }: ISortBoxProps) => {
  const handleNameFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSort(e.target.value);
    (document.activeElement as any).blur();
  };

  return (
    <Styles.SortBox>
      <div className="sortByText">Sort by</div>
      <div className="selectBoxContainer">
        <select className="selectBox" onChange={handleNameFeature}>
          <option value={'default'}>Featured</option>
          <option value={'A-Z'}>Alph, A-Z</option>
          <option value={'Z-A'}>Alph, Z-A</option>
          <option value={'low-high'}>$, Low to high</option>
          <option value={'high-low'}>$, High to low</option>
        </select>
        <span className="downArrowContainer">
          <img className="downArrowImage" src={downArrow} alt="downArrow" />
        </span>
      </div>
    </Styles.SortBox>
  );
};

export default SortBox;
