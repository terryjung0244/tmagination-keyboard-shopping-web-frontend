import { IProduct } from '../../../../../type/product.interface';

export interface SwitchModal {
  deleteBtn?: string;
  updateBtn?: string;
  updateToggle: boolean;
  deleteToggle: boolean;
  selectedSwitch: IProduct | null;
}
