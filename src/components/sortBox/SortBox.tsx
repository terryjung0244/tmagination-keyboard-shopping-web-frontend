import React from 'react';
import * as Styles from './SortBox.styled';
import downArrow from '../../assets/downArrow.png';

interface ISortBoxProps {
  handleSort: (sortType: string) => void;
}

const SortBox = ({ handleSort }: ISortBoxProps) => {
  const handleNameFeature = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleSort(e.target.value);
  };

  return (
    <Styles.SortBox>
      <div className="sortByText">Sort by</div>
      <div className="selectBoxContainer">
        <select className="selectBox" onChange={handleNameFeature}>
          <option value={'default'}>Featured</option>
          <option value={'A-Z'}>Alphabetically, A-Z</option>
          <option value={'Z-A'}>Alphabetically, Z-A</option>
          <option value={'low-high'}>Price, low to high</option>
          <option value={'high-low'}>Price, high to low</option>
        </select>
        <span className="downArrowContainer">
          <img className="downArrowImage" src={downArrow} alt="downArrow" />
        </span>
      </div>
    </Styles.SortBox>
  );
};

export default SortBox;
