import { Fragment } from 'react';
import { NavBar } from './components';
import { Home, Bin, Session } from './containers';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/bin',
    element: <Bin />
  },
  {
    path: '/session',
    element: <Session />
  }
]);

export const App = (): JSX.Element => {
  return (
    <Fragment>
      <NavBar />
      <RouterProvider router={router} />
    </Fragment>
  );
};
