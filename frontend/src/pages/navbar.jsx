import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Replace with your actual auth logic (e.g., check localStorage or context)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="relative flex h-16 items-center justify-between">
          
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
            > */}
              {/* <span className="sr-only">Open main menu</span>
              {isMobileOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                Hamburger icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div> */}

          {/* Logo + Links */}
          {/* <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
           <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png" alt="WEDO Organization Private Limited" /> 
              <div className="ml-3 flex flex-col"> 
                <h2 className="font-bold tracking-tight text-gray-900 text-xl/9">&nbsp;WOMENBUSINESSLISTED.COM</h2>
                <h2 className=""> &nbsp; Discover. Connect. Collaborate... </h2>
              </div>
            </div>
          </div> */}

          {/* Profile dropdown - optional */}
        <div className="flex items-center justify-between h-16 ">
          <div className="sm:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} type="button" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium" aria-controls="mobile-menu" aria-expanded={isMobileOpen}>
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

          <div className="flex items-center justify-end space-x-3 max-w-[70%] flex-wrap sm:flex-nowrap">
             <img
              src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png"
              alt="WEDO Logo"
              className="h-10 w-auto hidden sm:block"
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

          <div className="hidden sm:flex items-center space-x-4">
          <a href="https://rzp.io/rzp/W9tZcHEh" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Get Listed</a>
          <a href="http://www.womenbusinesslisted.com/b2b" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Partner With Us</a>
          <a href="https://forms.gle/fDNmuaY2g2YgNf5g8" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Enquire Here</a>
          <a href="https://amzn.in/d/6G8vdJD" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Visionary Women Collective</a>
        </div>

        </div>

      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <img
              src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png"
              alt="WEDO Logo"
              className="h-10 w-auto mx-auto my-auto mb-4"
            />
            <a href="https://rzp.io/rzp/W9tZcHEh" className="block text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Get Listed</a>
            <a href="http://www.womenbusinesslisted.com/b2b" className="block text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Partner With Us</a>
            <a href="https://forms.gle/fDNmuaY2g2YgNf5g8" className="block text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Enquire Here</a>
            <a href="https://amzn.in/d/6G8vdJD" className="block text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Visionary Women Collective</a>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;