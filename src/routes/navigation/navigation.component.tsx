import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to={'/'}>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
