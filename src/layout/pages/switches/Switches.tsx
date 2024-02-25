/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ISwitch } from './Switches.interface';
import { calculateDiscountRate } from '../../../util/math';

const Switches = () => {
  const [switches, setSwitches] = useState<ISwitch[]>([]);

  useEffect(() => {
    const getAllSwitches = async () => {
      const response = await fetch('http://localhost:8070/api/switch/getAllSwitches');
      const result = await response.json();
      setSwitches(result.result);
    };
    getAllSwitches();
  }, []);

  return (
    <div>
      {switches.map((swit: ISwitch) => {
        return (
          <div key={swit.switchId}>
            <h3>{swit.switchName}</h3>
            <img
              src={swit.switchImageUrl}
              style={{ width: '100px', height: '100px' }}
              alt={swit.switchName}
            />
            <div>Price :{calculateDiscountRate(swit.switchPrice, swit.switchDiscountRate)}</div>
            <div>DiscountRate : {swit.switchDiscountRate}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Switches;

// useEffect(() => {
//   const getAllKeyboards = async () => {
//     const response = await fetch('http://localhost:8070/api/keyboard/getAllKeyboards', {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const result = await response.json();
//     setKeyboards(result.result);
//   };
//   getAllKeyboards();
// }, []);
