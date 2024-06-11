import { Routes, Route } from 'react-router-dom';

import { HeroRouter } from '@/pods/heroes/routes';
import { LoginPage } from '@/pods/auth/pages/';

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="/*" element={<HeroRouter />} />
    </Routes>
  );
};
