import React, { useState } from 'react';
import * as Styled from './Practice.Styled';

const nameList = ['terry', 'hong', 'jelly', 'neo'];

const Practice = () => {
  const [selectedName, setSelectedName] = useState<string>('');

  const handleSelectName = (name: string) => {
    setSelectedName(name);
  };

  console.log(selectedName);

  return (
    <Styled.Practice>
      {nameList.map((name) => {
        return (
          <div
            key={name}
            onClick={() => handleSelectName(name)}
            className={name === selectedName ? 'selectedName' : ''}
          >
            {name}
          </div>
        );
      })}
    </Styled.Practice>
  );
};

export default Practice;
