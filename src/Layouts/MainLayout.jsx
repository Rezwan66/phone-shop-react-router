import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import { useEffect } from 'react';

const MainLayout = () => {
  const loc = useLocation();
  console.log(loc.pathname);
  useEffect(() => {
    if (loc.pathname === '/') {
      document.title = 'HOME';
    } else {
      document.title = `${loc.pathname.replace('/', '').toUpperCase()}`;
    }
    if (loc.state) {
      document.title = `${loc.state}`;
    }
  }, [loc.pathname, loc.state]);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
