import DefaultLayout from '@/components/DefaultLayout.jsx';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <div>에러가 발생했습니다.</div>,
  },
]);
