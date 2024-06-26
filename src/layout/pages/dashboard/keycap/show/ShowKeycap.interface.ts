import { IProduct } from '../../../../../type/product.interface';

export interface IShowKeycapCompPropsType {
  handleshow: () => void;
}

export interface IShowKeycapPropsType {
  keycap: IProduct;
  handleSearchKeycap: () => void;
}

export interface IModalStateType {
  updateBtn?: string;
  deleteBtn: string;
  updateToggle?: boolean;
  deleteToggle: boolean;
  selectedSwitch?: IProduct | null;
}
