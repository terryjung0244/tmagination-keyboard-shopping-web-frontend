/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const AComp = (props: any) => {
  console.log(props.person);

  return <div></div>;
};

// const AComp = (props: any) => {
//   const { name } = props.person;
//   console.log(name);

//   return <div></div>;
// };

export default AComp;
