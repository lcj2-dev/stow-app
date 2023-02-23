import { Fragment } from 'react';
import { NavBar } from './components';
import { Home } from './containers';

export const App = (): JSX.Element => {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
};
