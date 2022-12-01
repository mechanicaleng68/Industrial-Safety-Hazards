import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

export default function Navigation () {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Safety Hazards
      </Link>
      <ul>
        <CustomLInk to="/new">Add New</CustomLInk>
        <CustomLInk to="/hazard">Hazard Report</CustomLInk>
        <CustomLInk to="/about">About</CustomLInk>

      </ul>
    </nav>
  );
}

function CustomLInk({to, children, ...props}) {
  const resolvedPath = useResolvedPath (to);
  const isActive = useMatch ({path: resolvedPath.pathname, end: true});
  return (
    <li className={isActive === to ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
