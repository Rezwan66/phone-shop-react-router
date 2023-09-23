import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../Layouts/ErrorPage';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import PhoneDetails from '../pages/PhoneDetails';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/phones.json'),
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/phone/:id',
        element: <PhoneDetails></PhoneDetails>,
      },
    ],
  },
]);

export default route;
