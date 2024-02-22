import React from 'react';
import * as Styles from './App.Styled';
import Layout from '../layout/Layout';
import Navbar from '../layout/Header/Navbar';
import Footer from '../layout/footer/Footer';

const App = () => {
  return (
    <Styles.App>
      <Navbar />

      <Layout />

      <Footer />
    </Styles.App>
  );
};

export default App;
