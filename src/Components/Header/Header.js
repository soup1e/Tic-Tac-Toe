import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="nav">
      <NavLink to="/">home</NavLink>
      <NavLink to="/stats">stats</NavLink>
    </div>
  );
}
