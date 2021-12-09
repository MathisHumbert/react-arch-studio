import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar__container">
          <ul>
            <li>
              <Link to="/">portfolio</Link>
            </li>
            <li>
              <Link to="/">about us</Link>
            </li>
            <li>
              <Link to="/">contact</Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="sidebar-background"></div>
    </>
  );
};

export default Sidebar;
