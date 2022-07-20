import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from './Navbar.jsx';
import LoginButton from './Login-button.jsx';


function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Hol up...</h1>
  }

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Who are you</h1>
        <LoginButton />
      </div>
    )
  }

  return (
    isAuthenticated && (
      <div>
        <h1>EatSmart</h1>

        <Navbar />

        <img src={user.picture} />
        <h2>Welcome Back {user.name || 'User'}</h2>

        <div>Profile View</div>
      </div>
    )
  )
}

export default Profile;