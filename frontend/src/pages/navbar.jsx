import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Optional: Listen for storage changes (e.g., token removed in another tab)
  useEffect(() => {
    const handleStorage = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogin = () => {
    // Replace with your login logic (e.g., redirect to login page)
    window.location.href = '/login';
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Optionally redirect or reload
    window.location.reload();
  };

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            {!isLoggedIn ? (
              <button
                onClick={handleLogin}
                className="text-[#d18f00] border border-[#d18f00] bg-white hover:bg-[#d18f00] hover:text-white px-3 py-2 rounded-md text-lg font-medium transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium transition"
              >
                Logout
              </button>
            )}
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
            {!isLoggedIn ? (
              <button
                onClick={handleLogin}
                className="block w-full text-[#d18f00] border border-[#d18f00] bg-white hover:bg-[#d18f00] hover:text-white px-3 py-2 rounded-md text-lg font-medium mt-2 transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-lg font-medium mt-2 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;