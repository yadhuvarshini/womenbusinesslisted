import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

const AllBusinessCarousel = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  const csvUrl =
    'https://docs.google.com/spreadsheets/d/140rFP2JNPKFV3-CJ0yQ9puc37MZepXNLGUUQ_AgBq80/gviz/tq?tqx=out:csv';

  const fetchBusinesses = async () => {
    try {
      const response = await axios.get(csvUrl);
      const parsed = Papa.parse(response.data, {
        header: true,
        skipEmptyLines: true,
      });
      setBusinesses(parsed.data);
    } catch (error) {
      console.error('Error fetching/parsing businesses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContactClick = async (biz, platform) => {
    console.log("Business clicked:", biz);
    console.log("Platform clicked:", platform);
    console.log("phne:", biz["Phone Number "]);
        console.log("Using API:", import.meta.env.VITE_API_BASE_URL);

    const userEmail = localStorage.getItem("loggedInUserEmail");
    const userName = localStorage.getItem("loggedInUserName");
    if (!userEmail) {
      alert("Please log in to contact this business.");
      //redirect to login page
        window.location.href = '/api/login';
      return;
    }

    //name	email		business	phone	method

    const payload = {
      name: userName,
      email: userEmail,
      business: biz["Business / Brand Name"],
      phone: biz["Phone Number"] || '',
      method: platform,
      timestamp: new Date().toISOString(),
    };
    console.log("Payload to be sent:", payload);
    try {
      await axios.post('https://sheetdb.io/api/v1/qsgpi4lpoicnv', {
        data: [payload]
      });
      console.log("Contact click recorded successfully");

      console.log("SheetDB response:", res.data);
    } catch (err) {
      console.error("Failed to record contact click:", err);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  return (
    <div className="px-4 py-10 bg-white">
      <h2 className="text-2xl font-bold text-indigo-700 mb-6">🌟 All Businesses</h2>

      {loading ? (
        <div className="text-center text-gray-500">Loading businesses...</div>
      ) : businesses.length === 0 ? (
        <div className="text-center text-gray-400">No businesses found.</div>
      ) : (
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {businesses.map((biz, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-[280px] bg-white border border-gray-200 shadow-md rounded-lg p-5 flex-shrink-0 hover:shadow-lg transition duration-300"
            >
                
              {(() => {
                const logo = biz["Logo Upload"];
                let imgSrc = 'https://img.icons8.com/ios-filled/100/000000/user.png';
                const match = logo?.match(/\/d\/([a-zA-Z0-9_-]{25,})/);
                if (match) {
                  imgSrc = `https://drive.google.com/thumbnail?id=${match[1]}`;
                }
                return (
                  <img
                    src={imgSrc}
                    alt={biz["Business / Brand Name"]}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-3 border"
                  />
                );
              })()}
              <h3 className="text-center text-md font-semibold text-gray-800">
                {biz["Business / Brand Name"]}
              </h3>
              <p className="text-center text-sm text-gray-500">
                {biz["Business Category - wriiten"]}
              </p>
              <p className="text-center text-xs text-gray-400 line-clamp-2 mt-1">
                {biz["Business Description"] || ''}
              </p>
              {biz["Website"] && (
                <a
                  href={biz["Website"]?.startsWith('http')
                    ? biz["Website"]
                    : `https://${biz["Website"]}`
                }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 text-sm text-indigo-600 hover:underline"
                  onClick={async (e) => {
                    const ok = await handleContactClick(biz, 'Website');
                    if (!ok) e.preventDefault(); // 🛑 prevent link from opening
                }}
                >
                  Visit →
                </a>
              )}
              <div className="flex justify-center space-x-3 mt-3">
                {biz["Instagram Link"] && (
                  <a
                    href={biz["Instagram Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleContactClick(biz, 'Instagram')}
                  >
                    <img src="https://img.icons8.com/ios-glyphs/24/000000/instagram-new.png" alt="Instagram" />
                  </a>
                )}
                {biz["Facebook Link"] && (
                  <a
                    href={biz["Facebook Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleContactClick(biz, 'Facebook')}
                  >
                    <img src="https://img.icons8.com/ios-glyphs/24/000000/facebook-new.png" alt="Facebook" />
                  </a>
                )}
                {biz["Linkedln link"] && (
                  <a
                    href={biz["Linkedln link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleContactClick(biz, 'LinkedIn')}
                  >
                    <img src="https://img.icons8.com/ios-glyphs/24/000000/linkedin.png" alt="LinkedIn" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBusinessCarousel;