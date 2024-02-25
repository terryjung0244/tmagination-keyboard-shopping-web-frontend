/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { IKeyboardInputStateType } from '../dashboard/keyboard/create/CreateKeyboard.interface';
import { calculateDiscountRate } from '../../../util/math';

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState<IKeyboardInputStateType[]>([]);
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
      {keyboards.map((keyboard: IKeyboardInputStateType) => {
        return (
          <div key={keyboard.keyboardId}>
            <h3>{keyboard.keyboardName}</h3>
            <img
              src={keyboard.keyboardImageUrl}
              style={{ width: '200px', height: '100px' }}
              alt={keyboard.keyboardName}
            />
            <div>
              Keyboard Price :
              {calculateDiscountRate(keyboard.keyboardPrice, keyboard.keyboardDiscountRate)}
            </div>
            <div>keyboardDiscountRate : {keyboard.keyboardDiscountRate}</div>
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
