import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import AboutMePage from './pages/AboutMePage';
import UserPage from './pages/UserPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/me" element={<AboutMePage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};

export default AppRouter;