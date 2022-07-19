import React from 'react';

import Navbar from './Navbar.jsx';
import LoginButton from './Login-button.jsx';
import SignupButton from './Signup-button.jsx';
import LogoutButton from './Logout-button.jsx';

function Profile() {


  return (
    <div>
      <h1>EatSmart</h1>
      <Navbar />
      <LoginButton />
      <LogoutButton />
      <h2>New User?</h2>
      <SignupButton />
      <div>Profile View</div>
    </div>
  )
}

export default Profile;