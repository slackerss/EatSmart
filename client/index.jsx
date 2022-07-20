/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App.jsx';
import Profile from './components/Profile.jsx';
import { AppContextProvider } from './context/AppContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);
