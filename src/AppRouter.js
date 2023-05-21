import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PostsPage from './pages/PostsPage';
import AboutMePage from './pages/AboutMePage';
import UserPage from './pages/UserPage';
import NavbarContainer from './components/NavBar/NavbarContainer';

const AppRouter = () => {
  return (
    <React.Fragment>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/me" element={<AboutMePage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter;