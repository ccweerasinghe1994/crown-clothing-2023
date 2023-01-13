import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.component';
import React from 'react';

interface ShopProps {}
const Shop: React.FC<ShopProps> = () => {
  return <div>This is the Shop Page</div>;
};

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <div>Navigation Page</div>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
