/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import { IProduct } from '../../../product.interface';

const Switches = () => {
  const [switches, setSwitches] = useState<IProduct[]>([]);

  useEffect(() => {
    const getAllSwitches = async () => {
      const response = await fetch('http://localhost:8070/api/switch/getAllSwitches', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(switches);
      setSwitches(result.result);
    };
    getAllSwitches();
  }, []);

  return <div></div>;
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
