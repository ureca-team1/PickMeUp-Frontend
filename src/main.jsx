import { router } from '@/router/index.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* 토스트바 나타나게 해줌 */}

    <Toaster
      position="bottom-center"
      reverseOrder={false}
      toastOptions={{
        success: {
          className: 'toast-responsive',
        },
        error: {
          className: 'toast-responsive',
        },
      }}
    />
  </StrictMode>
);
