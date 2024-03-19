import { IProduct } from '../type/product.interface';

export const handleProductSort = (sortType: string, tempKeycaps: IProduct[]) => {
  return tempKeycaps.sort((a: IProduct, b: IProduct) => {
    if (sortType === 'A-Z') {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    }
    if (sortType === 'Z-A') {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
    }
    if (sortType === 'low-high') {
      if (parseFloat(a.price) < parseFloat(b.price)) {
        return -1;
      }
      if (parseFloat(a.price) > parseFloat(b.price)) {
        return 1;
      }
    }
    if (sortType === 'high-low') {
      if (parseFloat(a.price) > parseFloat(b.price)) {
        return -1;
      }
      if (parseFloat(a.price) < parseFloat(b.price)) {
        return 1;
      }
    }
    return 0;
  });
};
