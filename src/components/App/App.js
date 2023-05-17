import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesConfig from './routes';
import Layout from '../common/Layout';

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Layout>
          <RoutesConfig />
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
