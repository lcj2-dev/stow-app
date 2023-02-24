import { Fragment } from 'react';
import { NavBar } from './components';
import { Home, Bin, Session, Container } from './containers';
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
  },
  {
    path: '/container',
    element: <Container />
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
