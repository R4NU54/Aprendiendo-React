import { Routes, Route, Navigate } from 'react-router-dom';

import { DcPage, MarvelPage, HeroPage, SearchPage } from '@/pods/heroes/pages';
import { NavBar } from '@/pods/layout/components/NavBar';

export const HeroRouter = () => {
  return (
    <>
      <NavBar />
      <section className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </section>
    </>
  );
};
