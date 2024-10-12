import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { navigationItems } from '../router';

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </div>
  );
};

export default RootLayout;
