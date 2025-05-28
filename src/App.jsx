import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components//Footer';
import Header from './components/Header';

const Product = lazy(() => import('./pages/product/Product'));
const Users = lazy(() => import('./pages/user/Users'));


const AppContent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Product />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<p className="text-center mt-4">Yuklanmoqda...</p>}>
      <AppContent />
    </Suspense>
  </BrowserRouter>
);

export default App;
