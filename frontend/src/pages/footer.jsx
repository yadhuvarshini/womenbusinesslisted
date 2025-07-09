import React from "react";


const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-4">
         {/* <img
            className="mx-auto md:mx-0 h-10"
            src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png"
            alt="WEDO Logo"
          />  */}
          <div className="ml-3 flex flex-col"> 
                <h2 className="font-bold tracking-tight text-gray-900 text-xl/9">&nbsp;WOMENBUSINESSLISTED.COM</h2>
                <h2 className=""> &nbsp; Discover. Connect. Collaborate... </h2>
            </div>
          
          <p className="text-gray-600"> Women Business Listed is a dedicated platform empowering women entrepreneurs by showcasing their businesses, building visibility, and creating meaningful connections. We believe in amplifying women’s voices, one business at a time.

        </p>
          <p className="text-sm text-gray-500">
            Address: Women Entrepreneurship Development Organisation Pvt Ltd
        2665+2V4, Guindy Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032          
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex flex-col justify-center items-center md:items-end space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Connect with us</h4>
          <div className="flex space-x-4">
            
             {/* Whatsapp */}
            <a
              href="https://wame.pro/collective"
              className="w-9 h-9  flex items-center justify-center hover:bg-red-600"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" alt="" />
            </a>
            
            {/* IG */}
            <a
              href="https://www.instagram.com/wedowomen_india/?hl=en"
              className="w-9 h-9  flex items-center justify-center hover:bg-indigo-600"
              target="_blank"
              rel="noreferrer"
            >
                <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="" />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/company/wedo-women-entrepreneurship-development-organisation/?originalSubdomain=in"
              className="w-9 h-9 r flex items-center justify-center hover:bg-pink-600"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/wedowomen/"
              className="w-9 h-9  flex items-center justify-center hover:bg-blue-600"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000" alt="" />
            </a>

            {/*YouTube */}
            {/* <a
              href="#"
              className="w-9 h-9  flex items-center justify-center hover:bg-red-600"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://img.icons8.com/?size=100&id=37325&format=png&color=000000" alt="" />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t pt-4">
        © 2025 Women Business Listed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;