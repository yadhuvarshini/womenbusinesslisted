import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  checkLoginStatus();
  window.addEventListener('storage', checkLoginStatus);
  return () => window.removeEventListener('storage', checkLoginStatus);
}, []);

  const handleLogin = () => {
      navigate('/login');
  };

const handleLogout = () => {
  localStorage.removeItem('token');
  setIsLoggedIn(false);
  window.dispatchEvent(new Event('storage'));
  navigate('/');
};

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center justify-end space-x-3 max-w-[70%] flex-wrap sm:flex-nowrap">
            <img
              src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png"
              alt="WEDO Logo"
              className="h-10 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <h2 className="font-bold text-gray-900 text-base sm:text-xl whitespace-normal sm:whitespace-nowrap">
                WOMENBUSINESSLISTED.COM
              </h2>
              <p className="text-xs sm:text-sm text-gray-700">
                Discover. Connect. Collaborate...
              </p>
            </div>
          </div>

          {/* Hamburger Icon (always visible) */}
          <div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              type="button"
              className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium focus:outline-none"
              aria-controls="main-menu"
              aria-expanded={isMobileOpen}
            >
              <span className="sr-only">Open Main Menu</span>
              {isMobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div> 
          
        </div>
      </div>

      {/* Main Menu (overlay style, always toggled by hamburger) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-start pt-20"
          id="main-menu"
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6 relative">
            {/* Close button inside menu */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center space-y-4">
              <img
                src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png"
                alt="WEDO Logo"
                className="h-12 w-auto mb-2"
              />
              <a href="https://rzp.io/rzp/W9tZcHEh" className="w-full text-center text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Get Listed</a>
              <a href="http://www.womenbusinesslisted.com/b2b" className="w-full text-center text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Partner With Us</a>
              <a href="https://forms.gle/fDNmuaY2g2YgNf5g8" className="w-full text-center text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Enquire Here</a>
              <a href="https://amzn.in/d/6G8vdJD" className="w-full text-center text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Visionary Women Collective</a>
              {!isLoggedIn ? (
                <button
                  onClick={handleLogin}
                  className="w-full text-[#d18f00] border border-[#d18f00] bg-white hover:bg-[#d18f00] hover:text-white px-3 py-2 rounded-md text-lg font-medium mt-2 transition"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() => navigate('/profile')}
                  className="w-full text-[#d18f00] border border-[#d18f00] bg-white hover:bg-[#d18f00] hover:text-white px-3 py-2 rounded-md text-lg font-medium mt-2 transition"
                >
                  Profile
                </button>
              )}
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="w-full text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium mt-2 transition"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
