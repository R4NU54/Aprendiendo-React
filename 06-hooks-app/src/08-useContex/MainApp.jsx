import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import { AboutPage, HomePage, LoginPage } from './pages';
import { Navbar } from './components/Navbar';

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to="about" />} />
      </Routes>
    </UserProvider>
  );
};
