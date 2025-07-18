import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [form, setForm] = useState({
  name: '',
  email: '',
  profilePicture: '',
  business: {
    username: '',
    description: '',
    category: '',
    website: '',
    socialMedia: {
      platform: '',
      link: ''
    },
    email: '',
    phone: '',
    whatsappNumber: '',
    contact: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
    },
    logo: '',
    banner: ''
  }
});

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const fetchProfile = async () => {
    try {

        const rawToken = localStorage.getItem('authToken');
        const token = rawToken.replace(/^"|"$/g, ''); // Removes leading/trailing quotes

      const { data } = await axios.get('http://localhost:5050/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
        console.log('Profile data fetched:', data);
    
        

      setForm(prev => {
        const user = data.user;
    return {
        ...prev,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture || '',
        business: {
            ...prev.business,
            ...user.business,
            address: {
            ...prev.business.address,
            ...user.business?.address
            },
            socialMedia: {
            ...prev.business.socialMedia,
            ...user.business?.socialMedia
            }
        }
    };
});
      console.log("Token sent:", token);
    } catch (err) {
      console.error(err);
      console.error("Fetch failed, data or user missing", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const path = e.target.name.split('.');
    const value = e.target.value;

    setForm(prev => {
      const updated = { ...prev };
      let curr = updated;
      for (let i = 0; i < path.length - 1; i++) {
        curr = curr[path[i]];
      }
      curr[path[path.length - 1]] = value;
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
         if (!form.business.socialMedia.platform) {
        form.business.socialMedia.platform = 'Other';
      }
        const rawToken = localStorage.getItem('authToken');
        const token = rawToken.replace(/^"|"$/g, ''); // Removes leading/trailing quotes
        await axios.put('http://localhost:5050/api/profile', form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
        if (!form.business.socialMedia.platform) {
        form.business.socialMedia.platform = 'Other';
        }
      //console log the request body
      console.log('Request body:', form);
      console.log('token:', token);
      setMessage('Profile updated successfully ✅');
    } catch (err) {
      setMessage('Failed to update ❌');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) return (
    <div className="p-10 text-center animate-pulse text-indigo-600 text-lg">
      Loading profile...
    </div>
  );

  // Fallback UI if form.business or nested properties are undefined
  if (!form.business) return <div className="p-10 text-center">Business info not available.</div>;
  if (!form.business.address) form.business.address = { street: '', city: '', state: '', country: '', zipCode: '' };
  if (!form.business.socialMedia) form.business.socialMedia = { platform: '', link: '' };

  return (
    <div className="w-full px-4 py-8 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow rounded-lg">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
            <img
              src={form.business.logo || 'https://img.icons8.com/?id=7823&format=png&color=000000'}
              alt="Company Logo"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold">{form.name}</h1>
              <p className="text-sm opacity-90">{form.email}</p>
              <p className="text-sm mt-1">{form.business.username}</p>
            </div>
          </div>
        </div>

        {message && <p className="mb-4 text-green-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6 transition duration-500 hover:shadow-2xl">
        {/* Basic */}
        <div>
          <label className="block">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" disabled />
        </div>
        <div>
          <label className="block">Profile Picture URL</label>
          <input name="profilePicture" value={form.profilePicture} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>

        <h3 className="text-xl mt-6 font-semibold">🏢 Business Info</h3>

        <div>
          <label className="block">Business Name</label>
          <input name="business.username" value={form.business.username} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Business Description</label>
          <textarea name="business.description" value={form.business.description} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Category</label>
          <input name="business.category" value={form.business.category} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Website</label>
          <input name="business.website" value={form.business.website} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>

        <div>
          <label className="block">Social Media Platform</label>
         <select name="business.socialMedia.platform" value={form.business.socialMedia.platform} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm">
            <option value="Other" disabled>Select Platform</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Twitter">Twitter</option>
            <option value="YouTube">YouTube</option>
            <option value="Other">Other</option>
         </select>    
        </div>
        <div>
          <label className="block">Social Media Link</label>
          <input name="business.socialMedia.link" value={form.business.socialMedia.link} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>

        <div>
          <label className="block">Business Email</label>
          <input name="business.email" value={form.business.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Phone</label>
          <input name="business.phone" value={form.business.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">WhatsApp Number</label>
          <input name="business.whatsappNumber" value={form.business.whatsappNumber} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Main Contact</label>
          <input name="business.contact" value={form.business.contact} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>

        <h3 className="text-xl mt-6 font-semibold">📍 Address</h3>
        <div>
          <label className="block">Street</label>
          <input name="business.address.street" value={form.business.address.street} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">City</label>
          <input name="business.address.city" value={form.business.address.city} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">State</label>
          <input name="business.address.state" value={form.business.address.state} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Country</label>
          <input name="business.address.country" value={form.business.address.country} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">ZIP Code</label>
          <input name="business.address.zipCode" value={form.business.address.zipCode} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>

        <h3 className="text-xl mt-6 font-semibold">🎨 Media</h3>
        <div>
          <label className="block">Business Logo URL</label>
          <input name="business.logo" value={form.business.logo} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>
        <div>
          <label className="block">Business Banner URL</label>
          <input name="business.banner" value={form.business.banner} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-300 shadow-sm" />
        </div>

          <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded shadow-md transition duration-300 hover:shadow-indigo-500/50 animate-pulse">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;