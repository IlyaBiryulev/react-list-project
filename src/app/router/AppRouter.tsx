import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './routes';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const PostPage = lazy(() => import('@/pages/PostPage/PostPage'));

const PAGES = [
  {
    url: ROUTES.BASE_ROUTE,
    page: <HomePage />,
  },
  {
    url: ROUTES.SELECTED_POST,
    page: <PostPage />,
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
