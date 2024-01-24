import { Route, Routes } from 'react-router-dom';

import HomePage from '@/pages/HomePage/HomePage';

import { ROUTES } from './routes';

const PAGES = [
  {
    url: ROUTES.BASE,
    page: <HomePage />,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      {PAGES.map(({ url, page }) => (
        <Route key={url} path={url} element={page} />
      ))}
    </Routes>
  );
};
