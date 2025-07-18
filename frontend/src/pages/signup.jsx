import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


//form that data should be passed to reuest using axios 
const Signup = () => {
 const [formData, setFormData] = useState({ name:``, email:``, password:``});
 const token = localStorage.getItem('authToken');
 const navigate = useNavigate();
//  const payload = JSON.parse(atob(token.split('.')[1]));
//  console.log(payload); // should include id, email, paid
console.log(token, "debug- 1");

 const handleChange = (e) => {
    setFormData({
        ...formData, [e.target.name]: e.target.value
    });
 }

 const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
        alert("All fields required!");
        return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      alert("Signup successful!");
      if (response.data && response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Account already exists. Redirecting to login.");
        navigate('/login');
      } else {
        console.error("There was an error signing up!", error);
        alert("Signup failed. Please try again.");
      }
    }
 }

    return (
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up to your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form 
      onSubmit={handleSubmit}
      className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-2 block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-2 block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="mt-2 block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        {/* Submit */}
        <div>
          <button type="submit" className="w-full rounded-md bg-[#d18f00] px-3 py-1.5 text-white font-semibold hover:opacity-90">Sign Up</button>
        </div>
      </form>
          Already have an account?{' '}
          <span
            className="font-semibold custom-brand-color cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Sign In
          </span>
    </div>
  </div>
);
}
export default Signup
