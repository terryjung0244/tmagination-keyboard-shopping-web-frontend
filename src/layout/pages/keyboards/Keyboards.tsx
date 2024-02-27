/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { calculateDiscountRate } from '../../../util/math';
import { IProduct } from '../../../product.interface';

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState<IProduct[]>([]);
  useEffect(() => {
    const getAllKeyboards = async () => {
      const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      setKeyboards(result.result);
    };
    getAllKeyboards();
  }, []);

  return (
    <div>
      {keyboards.map((keyboard: IProduct) => {
        return (
          <div key={keyboard.id}>
            <h3>{keyboard.name}</h3>
            <img
              src={keyboard.imageUrl}
              style={{ width: '200px', height: '100px' }}
              alt={keyboard.name}
            />
            <div>
              Keyboard Price :{calculateDiscountRate(keyboard.price, keyboard.discountRate)}
            </div>
            <div>keyboardDiscountRate : {keyboard.discountRate}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Keyboards;

// export const calculateDiscountRate = (price: string, discountRate: number) => {
//   return parseInt(price) - parseInt(price) * discountRate;
// };

// UI
// GetAllProducts
// 복습 겸 keycaps & accessories (CRUD)

// 재고
