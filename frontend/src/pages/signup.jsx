import React, {useState} from 'react'
import axios from 'axios'


//form that data should be passed to reuest using axios 

const Signup = () => {
 const [formData, setFormData] = useState({ name:``, email:``, password:``});

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
        const response = await axios.post('http://localhost:5050/api/register', {
            name: formData.name,
            email: formData.email,
            password: formData.password
        });
        alert("Signup successful!");
        console.log(response.data);
    } catch (error) {
        console.error("There was an error signing up!", error);
        alert("Signup failed. Please try again.");
    }
 }

    return (
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://womenbusinesslisted.com/wp-content/uploads/2025/06/cropped-WEDOLogo-1.png" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up to your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Name</label>
          <input type="text" name="name" id="name" required className="mt-2 block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
          <input type="email" name="email" id="email" required className="mt-2 block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
          <input type="password" name="password" id="password" required className="mt-2 block w-full rounded-md px-3 py-1.5 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} />
        </div>

        {/* Submit */}
        <div>
          <button type="submit" className="w-full rounded-md bg-[#d18f00] px-3 py-1.5 text-white font-semibold hover:opacity-90">Sign Up</button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account? <a href="/api/login" className="font-semibold text-[#d18f00] hover:underline">Sign In</a>
      </p>
    </div>
  </div>
);
}
export default Signup
