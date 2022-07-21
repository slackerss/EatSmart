/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Auth0ProviderWithNavigate from './auth/auth0-provider-with-navigate.jsx';

import App from './components/App.jsx';
import Profile from './components/Profile.jsx';
import { AppContextProvider } from './context/AppContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppContextProvider>
<BrowserRouter>

  <Auth0ProviderWithNavigate>
  
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="profile" element={<Profile />} />
  </Routes>

  </Auth0ProviderWithNavigate>
  
</BrowserRouter>
</AppContextProvider>
);
