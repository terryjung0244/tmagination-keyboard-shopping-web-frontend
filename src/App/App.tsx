import React from 'react';
import * as Styles from './App.Styled';
import Layout from '../layout/Layout';
import Navbar from '../layout/Header/Navbar';

const App = () => {
  return (
    <Styles.App>
      <Navbar />
      <Layout />
    </Styles.App>
  );
};

export default App;
