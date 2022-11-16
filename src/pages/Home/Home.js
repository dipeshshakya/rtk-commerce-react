import React from 'react';
import ProductList from '../../components/ProductList';
import MainLayout from '../../layout/MainLayout';

function Home() {
  return (
    <>
      <MainLayout>
        <ProductList />
      </MainLayout>
    </>
  );
}

export default Home;
