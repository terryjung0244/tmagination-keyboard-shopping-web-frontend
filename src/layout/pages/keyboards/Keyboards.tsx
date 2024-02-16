/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

const Keyboards = () => {
  const [keyboards, setKeyboards] = useState<any>([]);
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
      {keyboards.map((keyboard: any) => {
        return (
          <div key={keyboard.keyboardId}>
            <h3>{keyboard.keyboardName}</h3>
            <img
              src={keyboard.keyboardImageUrl}
              style={{ width: '200px', height: '100px' }}
              alt={keyboard.keyboardName}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Keyboards;
