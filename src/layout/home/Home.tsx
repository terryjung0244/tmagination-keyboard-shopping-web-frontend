import React from 'react';
import { getUuid } from '../../util/uuid';

const Home = () => {
  const handleUniqid = () => {
    console.log(getUuid);
  };

  return (
    <div className="border-2 border-green-500">
      <button onClick={handleUniqid}>getUniqid</button>
    </div>
  );
};

export default Home;
