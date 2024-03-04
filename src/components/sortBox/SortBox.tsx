import React from 'react';
import { ISortFilter } from '../../type/sortFilter.interface';

interface ISortBox {
  sortFilter: ISortFilter;
}

const SortingBox = ({ sortFilter }: ISortBox) => {
  console.log(sortFilter);
  return <div>SortingBox</div>;
};

export default SortingBox;
