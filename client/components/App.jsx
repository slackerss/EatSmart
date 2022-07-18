import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {


  return (
    <div>
      <h1>EatSmart</h1>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
      >
        <Link to="/profile">Profile component</Link>
      </nav>
      <div>Search component</div>
      <div>Log component</div>
    </div>
  )
}

export default App;