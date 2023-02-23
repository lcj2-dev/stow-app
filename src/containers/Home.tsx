import { Button, Wrapper } from '../components';
import { Link } from 'react-router-dom';
import { HomeRoute } from '../typescript/interfaces';
import data from '../data/HomeRoutes.json';

export const Home = (): JSX.Element => {
  const { routes } = data;

  return (
    <Wrapper>
      {routes.map((r: HomeRoute, idx) => (
        <Link to={r.path}>
          <Button key={idx}>{r.text}</Button>
        </Link>
      ))}
    </Wrapper>
  );
};
