import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <>
      <aside className={`sidebar ${isSidebarOpen && 'open'}`}>
        <div className="sidebar__container">
          <ul>
            <li>
              <Link to="/portfolio" onClick={closeSidebar}>
                portfolio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeSidebar}>
                about us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeSidebar}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div
        className={`sidebar-background ${isSidebarOpen && 'open'}`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
