import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Seeder from "../../assets/images/Seeder.png";

import Button from "../../ui/Button";
import navlinks from '../../data/navlinks'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check screen size


  // Update isMobile state on screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderDesktopNav = () => (
    <div>
      <div className=""></div>
      <nav className="sticky top-0 w-full flex justify-between items-center py-3 px-6 shadow-md bg-white z-50">
      {/* Logo */}
      <div>
        <img src={Seeder} width={128} alt="Jobster Light Logo" />
      </div>

      {/* Middle Nav Elements */}
      <div className="flex items-center gap-4">
        <NavLink to='jobs' className={({ isActive }) => `link ${isActive ? 'text-primary' : ''}`}>Jobs</NavLink>
        <NavLink to='companies' className={({ isActive }) => `link ${isActive ? 'text-primary' : ''}`}>Companies</NavLink>
      </div>

      {/* Login and Register */}
      <div className="flex items-center gap-4">
        <Link to='/login' className='link'>Login</Link>

        <Button
          text="Register"
          path="/register"
          className="py-2 px-4 bg-primary border-2 border-transparent rounded-sm text-white transition-all font-semibold duration-200 ease-in-out hover:border-primary hover:bg-white hover:text-primary"
        />
      </div>
    </nav>
    </div>
  );

  const renderNavLinks = navlinks.map((link, index) => (
    <NavLink key={index} to={link.path} className={({isActive}) =>`mobile-navlink ${isActive ? 'text-primary border-primary' : 'text-gray-600 border-transparent'}`}>
        <span>{React.createElement(link.icon)}</span>
        <span className="text-sm font-medium">{link.text}</span>
    </NavLink>
  ))

  const renderMobileNav = () => (
    <div>
        <div className="w-full h-16"></div>
        <nav className="fixed bottom-0 w-full border shadow-md bg-white z-50">
            <div className="flex justify-between items-center">
                {renderNavLinks}
            </div>
        </nav>
    </div>
  )

  return isMobile ? renderMobileNav() : renderDesktopNav();
};

export default Navbar;
