import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '@/pods/auth/pages/';
import { HeroRouter } from '@/pods/heroes/routes';

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route path="/*" element={<HeroRouter />} />
    </Routes>
  );
};
