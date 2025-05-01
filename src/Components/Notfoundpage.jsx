import React from 'react';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px',color:"#003873"}}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export default Notfoundpage;
