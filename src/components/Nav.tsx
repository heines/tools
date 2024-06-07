'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Nav: React.FC<NavProps> = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Tools!
        </a>

        <button className={`navbar-burger ${isActive ? 'is-active' : ''}`} onClick={handleBurgerClick} role="button" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`} onClick={handleBurgerClick} >
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              Nav
            </a>
            <div className="navbar-dropdown">
              <Link
                href="/tools/shuffle"
                className="navbar-item"
              >
                shuffle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;