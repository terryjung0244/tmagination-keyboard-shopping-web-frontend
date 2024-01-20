import React from 'react';
import * as Styles from './App.Styled';
import Layout from '../layout/Layout';
import Navbar from '../layout/Header/Navbar';
import Footer from '../layout/footer/Footer';

const App = () => {
  return (
    <Styles.App>
      <Navbar />
      <div className="h-[calc(100vh-80px)]">
        <Layout />
      </div>

      <Footer />
    </Styles.App>
  );
};

export default App;
