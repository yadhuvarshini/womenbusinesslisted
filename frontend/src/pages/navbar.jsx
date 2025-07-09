import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo + Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
           <div className="flex flex-shrink-0 items-center">
              {/* <img className="h-10 w-auto" src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png" alt="WEDO Organization Private Limited" />  */}
              <div className="ml-3 flex flex-col"> 
                <h2 className="font-bold tracking-tight text-gray-900 text-xl/9">&nbsp;WOMENBUSINESSLISTED.COM</h2>
                <h2 className=""> &nbsp; Discover. Connect. Collaborate... </h2>
              </div>
            </div>
          </div>

          {/* Profile dropdown - optional */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Get Listed</a>
                <a href="#" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Partner With Us</a>
                <a href="#" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Enquire Here</a>
                <a href="#" className="text-white bg-[#d18f00] hover:text-[#9e4014] px-3 py-2 rounded-md text-lg font-medium">Visinary Women Collective</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a href="#" className="block bg-gray-900 text-white px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;