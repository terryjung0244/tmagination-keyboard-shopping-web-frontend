import React from 'react';
import * as Styles from './App.Styled';
import Layout from '../layout/Layout';
import Navbar from '../layout/Header/Navbar';
import AComp from '../dddd/AComp';

const person: { id: number; name: string } = {
  id: 1,
  name: 'Jung',
};

const App = () => {
  return (
    <Styles.App>
      <Navbar />
      <AComp person={person.name} />
      <Layout />
    </Styles.App>
  );
};

export default App;
